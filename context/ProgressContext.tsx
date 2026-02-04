import React, { createContext, useContext, useEffect, useState } from 'react';
import { LESSONS, LEVELS } from '../constants/Data';
import { dbService, LevelProgress, UserStats } from '../services/Database';

interface ProgressContextType {
    userStats: UserStats;
    levelProgress: { [key: string]: LevelProgress };
    completedIds: Set<string>;
    isLoading: boolean;
    completeLesson: (lessonId: string, levelId: string, score?: number) => Promise<void>;
    completeQuiz: (lessonId: string, levelId: string, score: number) => Promise<void>;
    refreshProgress: () => Promise<void>;
    unlockLevel: (levelId: string) => Promise<void>;
    resetProgress: () => Promise<void>;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export function ProgressProvider({ children }: { children: React.ReactNode }) {
    const [userStats, setUserStats] = useState<UserStats>({ points: 0, streak: 0, completed_lessons: 0 });
    const [levelProgress, setLevelProgress] = useState<{ [key: string]: LevelProgress }>({});
    const [completedIds, setCompletedIds] = useState<Set<string>>(new Set());
    const [isLoading, setIsLoading] = useState(true);

    const refreshProgress = async () => {
        try {
            const stats = await dbService.getUserStats();
            let levelsArr = await dbService.getLevelProgress();
            const completed = await dbService.getCompletedLessonIds();

            // Check if any level should be unlocked based on progress
            let needsReFetch = false;
            for (const level of levelsArr) {
                if (level.progress === 100) {
                    const nextLevelId = (parseInt(level.level_id) + 1).toString();
                    // Check if next level exists in our data
                    const nextLevelExists = LEVELS.some(l => l.id === nextLevelId);
                    if (nextLevelExists) {
                        const nextLevelInDb = levelsArr.find(l => l.level_id === nextLevelId);
                        if (!nextLevelInDb || nextLevelInDb.is_locked) {
                            await dbService.unlockLevel(nextLevelId);
                            needsReFetch = true;
                        }
                    }
                }
            }

            if (needsReFetch) {
                levelsArr = await dbService.getLevelProgress();
            }

            // Transform array to object for easier lookup
            const levelsObj: { [key: string]: LevelProgress } = {};
            levelsArr.forEach(l => {
                levelsObj[l.level_id] = l;
            });

            setUserStats(stats);
            setLevelProgress(levelsObj);
            setCompletedIds(new Set(completed));
        } catch (error) {
            console.error("Failed to refresh progress:", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        refreshProgress();
    }, []);

    const completeLesson = async (lessonId: string, levelId: string, score?: number) => {
        await dbService.markLessonComplete(lessonId, levelId, score);

        // Update streak
        await dbService.updateStreak();

        // Update points
        await dbService.updatePoints(10);

        // Calculate and update level progress
        const levelLessons = LESSONS[levelId as keyof typeof LESSONS] || [];
        const completedCount = (await dbService.getCompletedLessonIds()).filter(id =>
            levelLessons.some(l => l.id === id)
        ).length;

        const progress = (completedCount / levelLessons.length) * 100;
        await dbService.updateLevelProgress(levelId, progress);

        await refreshProgress();
    };

    const completeQuiz = async (lessonId: string, levelId: string, score: number) => {
        await completeLesson(lessonId, levelId, score);
        // Quizzes could give more points or have specific logic
        await dbService.updatePoints(score);
        await refreshProgress();
    };

    const unlockLevel = async (levelId: string) => {
        await dbService.unlockLevel(levelId);
        await refreshProgress();
    };

    const resetProgress = async () => {
        await dbService.resetDatabase();
        await refreshProgress();
    };

    return (
        <ProgressContext.Provider value={{
            userStats,
            levelProgress,
            completedIds,
            isLoading,
            completeLesson,
            completeQuiz,
            refreshProgress,
            unlockLevel,
            resetProgress
        }}>
            {children}
        </ProgressContext.Provider>
    );
}

export function useProgress() {
    const context = useContext(ProgressContext);
    if (context === undefined) {
        throw new Error('useProgress must be used within a ProgressProvider');
    }
    return context;
}
