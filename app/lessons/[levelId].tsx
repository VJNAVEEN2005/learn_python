import { GradientBackground } from '@/components/ui/GradientBackground';
import { LessonNode } from '@/components/ui/LessonNode';
import { PathRenderer } from '@/components/ui/PathRenderer';
import { LESSONS, LEVELS } from '@/constants/Data';
import { COLORS, SPACING } from '@/constants/theme';
import { useProgress } from '@/context/ProgressContext';
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useMemo } from 'react';
import { Dimensions, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

const { width } = Dimensions.get('window');
const NODE_SPACING = 120; // Vertical spacing between nodes
const PATH_PADDING = 60; // Horizontal padding from edges

export default function LessonListScreen() {
    const { levelId } = useLocalSearchParams();
    const router = useRouter();
    const { completedIds } = useProgress();

    const level = LEVELS.find((l) => l.id === levelId);
    const lessons = (LESSONS as any)[levelId as string] || [];

    const handleLessonPress = (lessonId: string, type: string) => {
        if (type === 'quiz') {
            router.push(`/quiz/${lessonId}` as any);
        } else {
            router.push(`/lesson/${lessonId}` as any);
        }
    };

    const handleBack = () => {
        router.back();
    };

    // Calculate path positions for each lesson - zig-zag pattern
    const pathPositions = useMemo(() => {
        return lessons.map((lesson: any, index: number) => {
            const isEven = index % 2 === 0;
            const x = isEven ? PATH_PADDING : width - PATH_PADDING;
            const y = 100 + index * NODE_SPACING;
            return { x, y };
        });
    }, [lessons]);

    const completedCount = lessons.filter((l: any) => completedIds.has(l.id)).length;

    return (
        <GradientBackground style={styles.container}>
            <View style={styles.header}>
                <Pressable onPress={handleBack} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={24} color={COLORS.text} />
                </Pressable>
                <Text style={styles.headerTitle}>{level?.title || 'Lessons'}</Text>
                <View style={{ width: 24 }} />
            </View>

            <ScrollView
                contentContainerStyle={[
                    styles.scrollContent,
                    { height: Math.max(600, lessons.length * NODE_SPACING + 200) }
                ]}
                showsVerticalScrollIndicator={false}
            >
                {/* Render the connecting path */}
                <PathRenderer positions={pathPositions} completedCount={completedCount} />

                {/* Render lesson nodes */}
                {lessons.map((item: any, index: number) => {
                    const isCompleted = completedIds.has(item.id);
                    const position = pathPositions[index];

                    // Check if previous lesson is completed (for sequential unlocking)
                    const isPreviousCompleted = index === 0 || completedIds.has(lessons[index - 1].id);
                    const isLocked = !isPreviousCompleted;
                    const isActive = isPreviousCompleted && !isCompleted;

                    // Determine size based on type
                    let size: 'small' | 'medium' | 'large' = 'medium';
                    if (item.type === 'quiz') size = 'large';
                    if (item.type === 'question') size = 'small';

                    return (
                        <View
                            key={item.id}
                            style={[
                                styles.nodeWrapper,
                                {
                                    left: position.x - 35, // Center the node
                                    top: position.y - 35,
                                }
                            ]}
                        >
                            <LessonNode
                                type={item.type || 'lesson'}
                                index={index}
                                title={item.title}
                                isCompleted={isCompleted}
                                isLocked={isLocked}
                                isActive={isActive}
                                size={size}
                                stars={isCompleted ? 3 : 0}
                                onPress={() => handleLessonPress(item.id, item.type || (item.isQuiz ? 'quiz' : 'lesson'))}
                                delay={index * 80}
                            />
                        </View>
                    );
                })}
            </ScrollView>
        </GradientBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: SPACING.m,
        paddingTop: SPACING.xl + 10,
        paddingBottom: SPACING.m,
    },
    backButton: {
        padding: SPACING.xs,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: COLORS.text,
    },
    scrollContent: {
        position: 'relative',
        paddingBottom: 100,
    },
    nodeWrapper: {
        position: 'absolute',
    },
});
