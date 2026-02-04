import * as SQLite from 'expo-sqlite';
import { Platform } from 'react-native';

export interface UserStats {
    points: number;
    streak: number;
    completed_lessons: number;
    last_activity_date?: string;
}

export interface LevelProgress {
    level_id: string;
    is_locked: boolean;
    progress: number;
}

export interface LessonCompletion {
    lesson_id: string;
    is_completed: boolean;
    last_score?: number;
}

class DatabaseService {
    private db: SQLite.SQLiteDatabase | null = null;
    private initPromise: Promise<void> | null = null;

    async init() {
        if (Platform.OS === 'web') return; // SQLite not supported on web natively by expo-sqlite
        if (this.initPromise) return this.initPromise;

        this.initPromise = (async () => {
            try {
                this.db = await SQLite.openDatabaseAsync('learn_python.db');

                // Create Tables individually for better reliability
                await this.db.execAsync(`
                    CREATE TABLE IF NOT EXISTS user_stats (
                        id INTEGER PRIMARY KEY AUTOINCREMENT,
                        points INTEGER DEFAULT 0,
                        streak INTEGER DEFAULT 0,
                        completed_lessons INTEGER DEFAULT 0,
                        last_activity_date TEXT
                    );
                `);

                // Ensure last_activity_date column exists for existing installations
                const tableInfo = await this.db.getAllAsync<{ name: string }>(`PRAGMA table_info(user_stats)`);
                const hasLastActivity = tableInfo.some(col => col.name === 'last_activity_date');
                if (!hasLastActivity) {
                    await this.db.execAsync(`ALTER TABLE user_stats ADD COLUMN last_activity_date TEXT`);
                }

                await this.db.execAsync(`
                    CREATE TABLE IF NOT EXISTS levels (
                        level_id TEXT PRIMARY KEY,
                        is_locked BOOLEAN DEFAULT 1,
                        progress REAL DEFAULT 0
                    );
                `);

                await this.db.execAsync(`
                    CREATE TABLE IF NOT EXISTS lesson_completions (
                        lesson_id TEXT PRIMARY KEY,
                        is_completed BOOLEAN DEFAULT 0,
                        last_score INTEGER
                    );
                `);

                // Initialize user_stats if empty
                const userExists = await this.db.getFirstAsync('SELECT * FROM user_stats');
                if (!userExists) {
                    await this.db.runAsync('INSERT INTO user_stats (points, streak, completed_lessons) VALUES (0, 0, 0)');
                }

                // Ensure Level 1 is unlocked
                await this.db.runAsync(`
                    INSERT OR IGNORE INTO levels (level_id, is_locked, progress) 
                    VALUES ('1', 0, 0)
                `);
            } catch (error) {
                console.error("Database initialization failed:", error);
                this.initPromise = null;
                throw error;
            }
        })();

        return this.initPromise;
    }

    async getUserStats(): Promise<UserStats> {
        if (Platform.OS === 'web') return { points: 0, streak: 0, completed_lessons: 0 };
        if (!this.db) await this.init();
        if (!this.db) return { points: 0, streak: 0, completed_lessons: 0 };
        const result = await this.db!.getFirstAsync<UserStats>('SELECT points, streak, completed_lessons, last_activity_date FROM user_stats LIMIT 1');
        return result || { points: 0, streak: 0, completed_lessons: 0 };
    }

    async updatePoints(pointsToAdd: number) {
        if (Platform.OS === 'web') return;
        if (!this.db) await this.init();
        if (!this.db) return;
        await this.db!.runAsync('UPDATE user_stats SET points = points + ?', [pointsToAdd]);
    }

    async updateStreak() {
        if (Platform.OS === 'web') return;
        if (!this.db) await this.init();
        if (!this.db) return;

        const stats = await this.getUserStats();
        const today = new Date().toISOString().split('T')[0];

        if (!stats.last_activity_date) {
            await this.db!.runAsync('UPDATE user_stats SET streak = 1, last_activity_date = ?', [today]);
            return;
        }

        const lastDate = stats.last_activity_date;
        if (lastDate === today) return; // Already updated today

        const lastDateTime = new Date(lastDate).getTime();
        const todayTime = new Date(today).getTime();
        // Calculate difference in days (UTC based to avoid daylight savings issues)
        const diffDays = Math.round((todayTime - lastDateTime) / (1000 * 60 * 60 * 24));

        if (diffDays === 1) {
            await this.db!.runAsync('UPDATE user_stats SET streak = streak + 1, last_activity_date = ?', [today]);
        } else if (diffDays > 1) {
            await this.db!.runAsync('UPDATE user_stats SET streak = 1, last_activity_date = ?', [today]);
        }
    }

    async getLevelProgress(): Promise<LevelProgress[]> {
        if (Platform.OS === 'web') return [];
        if (!this.db) await this.init();
        if (!this.db) return [];
        return await this.db!.getAllAsync<LevelProgress>('SELECT * FROM levels');
    }

    async markLessonComplete(lessonId: string, levelId: string, score?: number) {
        if (Platform.OS === 'web') return;
        if (!this.db) await this.init();
        if (!this.db) return;

        await this.db!.runAsync(`
            INSERT OR REPLACE INTO lesson_completions (lesson_id, is_completed, last_score)
            VALUES (?, 1, ?)
        `, [lessonId, score ?? null]);
    }

    async getCompletedLessonIds(): Promise<string[]> {
        if (Platform.OS === 'web') return [];
        if (!this.db) await this.init();
        if (!this.db) return [];
        const results = await this.db!.getAllAsync<{ lesson_id: string }>('SELECT lesson_id FROM lesson_completions WHERE is_completed = 1');
        return results.map(r => r.lesson_id);
    }

    async unlockLevel(levelId: string) {
        if (Platform.OS === 'web') return;
        if (!this.db) await this.init();
        if (!this.db) return;

        // Use INSERT OR REPLACE to ensure the row exists and is updated
        await this.db!.runAsync(`
            INSERT INTO levels (level_id, is_locked) 
            VALUES (?, 0)
            ON CONFLICT(level_id) DO UPDATE SET is_locked = 0
        `, [levelId]);
    }

    async updateLevelProgress(levelId: string, progress: number) {
        if (Platform.OS === 'web') return;
        if (!this.db) await this.init();
        if (!this.db) return;

        await this.db!.runAsync(`
            INSERT INTO levels (level_id, progress) 
            VALUES (?, ?)
            ON CONFLICT(level_id) DO UPDATE SET progress = excluded.progress
        `, [levelId, progress]);
    }

    async resetDatabase() {
        if (Platform.OS === 'web') return;
        if (!this.db) await this.init();
        if (!this.db) return;

        try {
            await this.db!.execAsync(`
                DELETE FROM user_stats;
                DELETE FROM levels;
                DELETE FROM lesson_completions;
                INSERT INTO user_stats (points, streak, completed_lessons) VALUES (0, 0, 0);
                INSERT INTO levels (level_id, is_locked, progress) VALUES ('1', 0, 0);
            `);
        } catch (error) {
            console.error("Database reset failed:", error);
            throw error;
        }
    }
}

export const dbService = new DatabaseService();
