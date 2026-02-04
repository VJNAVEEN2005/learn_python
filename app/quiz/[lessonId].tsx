import { GradientBackground } from '@/components/ui/GradientBackground';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { QUIZZES } from '@/constants/Data';
import { COLORS, RADIUS, SPACING } from '@/constants/theme';
import { useProgress } from '@/context/ProgressContext';
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useMemo, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function QuizScreen() {
    const { lessonId } = useLocalSearchParams();
    const router = useRouter();
    const { completeQuiz, completeLesson } = useProgress();

    const questions = useMemo(() => (QUIZZES as any)[lessonId as string] || [], [lessonId]);
    const [score, setScore] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [isAnswered, setIsAnswered] = useState(false);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

    const currentQuestion = questions[currentIndex];

    const playSound = async (success: boolean) => {
        // Placeholder for sound effect
    };

    const handleOptionPress = (index: number) => {
        if (isAnswered) return; // Locked after answering
        setSelectedOption(index);
    };

    const handleCheck = () => {
        if (selectedOption === null) return;

        const correct = selectedOption === currentQuestion.correctIndex;
        if (correct) setScore(prev => prev + 1);
        setIsCorrect(correct);
        setIsAnswered(true);
        playSound(correct);
    };

    const handleNext = async () => {
        if (currentIndex < questions.length - 1) {
            setCurrentIndex(currentIndex + 1);
            setSelectedOption(null);
            setIsAnswered(false);
            setIsCorrect(null);
        } else {
            // Quiz finished
            const levelNum = (lessonId as string).split('-')[0].replace('l', '');

            if (typeof lessonId === 'string' && lessonId.includes('final')) {
                // Mark the "lesson" item for this quiz as complete so it turns green and fills the progress bar
                await completeLesson(lessonId, levelNum, 50); // Final quiz gives 50 pts
                router.push('/complete' as any);
            } else {
                // For mini-quizzes
                await completeLesson(lessonId as string, levelNum, 20); // Mini quizes give 20 pts
                router.back();
            }
        }
    };

    if (!currentQuestion) {
        return (
            <GradientBackground style={styles.container}>
                <Text style={{ color: 'white', textAlign: 'center', marginTop: 100 }}>Quiz not found</Text>
            </GradientBackground>
        );
    }

    return (
        <GradientBackground style={styles.container}>
            <View style={styles.header}>
                <Pressable onPress={() => router.back()} style={styles.closeButton}>
                    <Ionicons name="close" size={24} color={COLORS.textSecondary} />
                </Pressable>
                <View style={styles.progressBar}>
                    <View style={[styles.progressFill, { width: `${((currentIndex + 1) / questions.length) * 100}%` }]} />
                </View>
            </View>

            <View style={styles.content}>
                <Text style={styles.questionText}>{currentQuestion.question}</Text>

                <View style={styles.optionsContainer}>
                    {currentQuestion.options.map((option: string, index: number) => {
                        let backgroundColor = COLORS.card;
                        let borderColor = COLORS.cardBorder;

                        if (isAnswered) {
                            if (index === currentQuestion.correctIndex) {
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
                            <Pressable
                                key={index}
                                onPress={() => handleOptionPress(index)}
                                style={[styles.optionButton, { backgroundColor, borderColor }]}
                            >
                                <Text style={styles.optionText}>{option}</Text>
                                {isAnswered && index === currentQuestion.correctIndex && (
                                    <Ionicons name="checkmark-circle" size={24} color={COLORS.success} />
                                )}
                                {isAnswered && index === selectedOption && index !== currentQuestion.correctIndex && (
                                    <Ionicons name="close-circle" size={24} color={COLORS.error} />
                                )}
                            </Pressable>
                        );
                    })}
                </View>
            </View>

            <View style={[styles.footer, { paddingBottom: Math.max(SPACING.xl + 10, 30) }]}>
                <PrimaryButton
                    title={
                        !isAnswered
                            ? "Check"
                            : currentIndex < questions.length - 1
                                ? "Continue"
                                : "Finish"
                    }
                    onPress={isAnswered ? handleNext : handleCheck}
                    style={{ width: '100%', opacity: selectedOption === null ? 0.5 : 1 }}
                    disabled={selectedOption === null}
                />
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
        paddingHorizontal: SPACING.m,
        paddingTop: SPACING.xl + 10,
        paddingBottom: SPACING.m,
    },
    closeButton: {
        padding: SPACING.xs,
    },
    progressBar: {
        flex: 1,
        height: 8,
        backgroundColor: COLORS.cardBorder,
        borderRadius: RADIUS.full,
        marginLeft: SPACING.m,
        overflow: 'hidden',
    },
    progressFill: {
        height: '100%',
        backgroundColor: COLORS.primary,
        borderRadius: RADIUS.full,
    },
    content: {
        flex: 1,
        padding: SPACING.l,
        justifyContent: 'center',
    },
    questionText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: COLORS.text,
        marginBottom: SPACING.xl,
        textAlign: 'center',
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
        fontSize: 18,
        color: COLORS.text,
        flex: 1,
    },
    footer: {
        padding: SPACING.l,
        paddingBottom: SPACING.xl + 10,
        minHeight: 120,
    },
});
