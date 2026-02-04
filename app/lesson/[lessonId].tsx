import { CodeCard } from '@/components/ui/CodeCard';
import { GradientBackground } from '@/components/ui/GradientBackground';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { LESSONS, QUIZZES } from '@/constants/Data';
import { COLORS, SPACING } from '@/constants/theme';
import { useProgress } from '@/context/ProgressContext';
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';

export default function LessonScreen() {
    const { lessonId } = useLocalSearchParams();
    const router = useRouter();
    const { completeLesson } = useProgress();

    // Helper to find lesson data
    let lesson: any = null;
    Object.values(LESSONS).forEach(list => {
        const found = list.find(l => l.id === lessonId);
        if (found) lesson = found;
    });

    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [isAnswered, setIsAnswered] = useState(false);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

    // Reset state when lesson changes
    React.useEffect(() => {
        setSelectedOption(null);
        setIsAnswered(false);
        setIsCorrect(null);
    }, [lessonId]);

    const handleOptionPress = (index: number) => {
        if (isAnswered) return;
        setSelectedOption(index);
    };

    const handleCheck = () => {
        if (selectedOption === null) return;
        const correct = selectedOption === lesson.correctIndex;
        setIsCorrect(correct);
        setIsAnswered(true);
    };

    const handleNext = async () => {
        // Mark as complete in DB
        if (typeof lessonId === 'string' && lessonId.includes('-')) {
            const levelNum = lessonId.split('-')[0].replace('l', '');
            await completeLesson(lessonId, levelNum);
        }

        // Check if there is a linked quiz for this lesson
        // Assuming ID format "l1-1" -> "l1-q1"
        if (typeof lessonId === 'string' && lessonId.includes('-')) {
            const parts = lessonId.split('-');
            const quizId = `${parts[0]}-q${parts[1]}`;

            // Check if this quiz exists in QUIZZES
            if ((QUIZZES as any)[quizId]) {
                router.replace(`/quiz/${quizId}` as any);
                return;
            }
        }

        router.back();
    };

    if (!lesson) {
        return (
            <GradientBackground style={styles.container}>
                <Text style={{ color: 'white', textAlign: 'center', marginTop: 100 }}>Lesson not found</Text>
            </GradientBackground>
        );
    }

    return (
        <GradientBackground style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Pressable onPress={() => router.back()} style={styles.backButton}>
                    <Ionicons name="close" size={24} color={COLORS.text} />
                </Pressable>
                <Text style={styles.progressText}>{lesson.type === 'question' ? 'Quick Check' : 'Lesson'}</Text>
                <View style={{ width: 24 }} />
            </View>

            <ScrollView contentContainerStyle={styles.content}>
                {lesson.type === 'question' ? (
                    <View style={styles.questionContainer}>
                        <Text style={styles.questionText}>{lesson.question}</Text>
                        <View style={styles.optionsContainer}>
                            {lesson.options?.map((option: string, index: number) => {
                                let backgroundColor = COLORS.card;
                                let borderColor = COLORS.cardBorder;

                                if (isAnswered) {
                                    if (index === lesson.correctIndex) {
                                        backgroundColor = 'rgba(34, 197, 94, 0.2)'; // Green tint
                                        borderColor = COLORS.success;
                                    } else if (index === selectedOption) {
                                        backgroundColor = 'rgba(239, 68, 68, 0.2)'; // Red tint
                                        borderColor = COLORS.error;
                                    }
                                } else if (selectedOption === index) {
                                    backgroundColor = 'rgba(56, 189, 248, 0.1)'; // Blue tint
                                    borderColor = COLORS.primary;
                                }

                                return (
                                    <Animated.View
                                        entering={FadeInDown.delay(index * 100 + 400).duration(400).springify()}
                                        key={index}
                                    >
                                        <Pressable
                                            style={[styles.optionButton, { backgroundColor, borderColor }]}
                                            onPress={() => handleOptionPress(index)}
                                        >
                                            <Text style={styles.optionText}>{option}</Text>
                                            {isAnswered && index === lesson.correctIndex && (
                                                <Ionicons name="checkmark-circle" size={24} color={COLORS.success} />
                                            )}
                                            {isAnswered && index === selectedOption && index !== lesson.correctIndex && (
                                                <Ionicons name="close-circle" size={24} color={COLORS.error} />
                                            )}
                                        </Pressable>
                                    </Animated.View>
                                )
                            })}
                        </View>
                    </View>
                ) : (
                    <>
                        <Text style={styles.title}>{lesson.title}</Text>
                        <Text style={styles.description}>{lesson.description}</Text>

                        <View style={styles.card}>
                            <Text style={styles.explanation}>{lesson.explanation}</Text>
                        </View>

                        {lesson.content && (
                            <View>
                                <Text style={styles.sectionHeader}>Code Example:</Text>
                                <CodeCard code={lesson.content} />
                            </View>
                        )}

                        {lesson.content && (
                            <View style={styles.card}>
                                <Text style={styles.sectionHeader}>Output:</Text>
                                <Text style={styles.output}>{'> ' + (lesson.content.includes('print') ? (lesson.content.match(/"([^"]+)"/)?.[1] || 'Output') : 'Done')}</Text>
                            </View>
                        )}
                    </>
                )}
            </ScrollView>

            <View style={[styles.footer, { paddingBottom: Math.max(SPACING.l, 30) }]}>
                {lesson.type === 'question' ? (
                    <PrimaryButton
                        title={!isAnswered ? "Check Answer" : "Continue"}
                        onPress={isAnswered ? handleNext : handleCheck}
                        disabled={!isAnswered && selectedOption === null}
                        style={{ opacity: (!isAnswered && selectedOption === null) ? 0.5 : 1 }}
                    />
                ) : (
                    <PrimaryButton title="Continue" onPress={handleNext} />
                )}
            </View>
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
        paddingBottom: SPACING.s,
    },
    backButton: {
        padding: SPACING.xs,
    },
    progressText: {
        color: COLORS.textSecondary,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 12,
    },
    content: {
        padding: SPACING.l,
        paddingBottom: 100,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: COLORS.text,
        marginBottom: SPACING.s,
    },
    description: {
        fontSize: 16,
        color: COLORS.textSecondary,
        marginBottom: SPACING.xl,
        lineHeight: 24,
    },
    card: {
        backgroundColor: COLORS.card,
        padding: SPACING.m,
        borderRadius: 16,
        marginBottom: SPACING.l,
        borderWidth: 1,
        borderColor: COLORS.cardBorder,
    },
    explanation: {
        fontSize: 16,
        color: COLORS.text,
        lineHeight: 24,
    },
    sectionHeader: {
        fontSize: 14,
        fontWeight: 'bold',
        color: COLORS.textSecondary,
        marginBottom: SPACING.s,
        textTransform: 'uppercase',
    },
    output: {
        fontFamily: 'monospace',
        color: COLORS.success,
        fontSize: 14,
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: SPACING.l,
        backgroundColor: 'rgba(15, 23, 42, 0.95)',
    },
    // New Question Styles
    questionContainer: {
        flex: 1,
        justifyContent: 'center',
        marginTop: SPACING.xl,
    },
    questionText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: COLORS.text,
        textAlign: 'center',
        marginBottom: SPACING.xl,
    },
    optionsContainer: {
        gap: SPACING.m,
    },
    optionButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: SPACING.m,
        borderRadius: 16,
        borderWidth: 2,
        backgroundColor: COLORS.card,
    },
    optionText: {
        fontSize: 16,
        color: COLORS.text,
        fontWeight: '500',
    }
});
