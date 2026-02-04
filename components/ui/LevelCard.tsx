import { COLORS, RADIUS, SPACING } from '@/constants/theme';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

interface Props {
    levelNumber: number;
    title: string;
    description: string;
    isLocked: boolean;
    progress: number;
    onPress: () => void;
}

export function LevelCard({ levelNumber, title, description, isLocked, progress, onPress }: Props) {
    const Container = isLocked ? View : LinearGradient;
    const containerProps = isLocked
        ? { style: [styles.card, styles.lockedCard] }
        : {
            colors: ['#1E293B', '#334155'], // Dark Slate Gradient
            start: { x: 0, y: 0 },
            end: { x: 1, y: 1 },
            style: styles.card,
        };

    return (
        <Pressable onPress={onPress} disabled={!!isLocked} style={({ pressed }) => ({ opacity: pressed ? 0.9 : 1 })}>
            {/* @ts-ignore */}
            <Container {...containerProps}>
                <View style={styles.header}>
                    <View style={[styles.iconContainer, isLocked && styles.iconLocked]}>
                        {isLocked ? (
                            <Ionicons name="lock-closed" size={24} color={COLORS.textMuted} />
                        ) : (
                            <Ionicons name="play" size={24} color={COLORS.text} />
                        )}
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={[styles.levelNum, isLocked && styles.textLocked]}>Level {levelNumber}</Text>
                        <Text style={[styles.title, isLocked && styles.textLocked]}>{title}</Text>
                    </View>
                </View>

                <Text style={[styles.description, isLocked && styles.textLocked]}>{description}</Text>

                {!isLocked && (
                    <View style={styles.progressContainer}>
                        <View style={[styles.progressBar, { width: `${progress}%` }]} />
                    </View>
                )}
            </Container>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: RADIUS.m,
        padding: SPACING.m,
        marginBottom: SPACING.m,
        borderWidth: 1,
        borderColor: COLORS.cardBorder,
        overflow: 'hidden',
    },
    lockedCard: {
        backgroundColor: COLORS.card,
        opacity: 0.7,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: SPACING.s,
    },
    iconContainer: {
        width: 48,
        height: 48,
        borderRadius: RADIUS.s,
        backgroundColor: COLORS.primary,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: SPACING.m,
    },
    iconLocked: {
        backgroundColor: COLORS.cardBorder,
    },
    textContainer: {
        flex: 1,
    },
    levelNum: {
        fontSize: 12,
        color: COLORS.secondary,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: COLORS.text,
    },
    textLocked: {
        color: COLORS.textMuted,
    },
    description: {
        fontSize: 14,
        color: COLORS.textSecondary,
        marginBottom: SPACING.m,
    },
    progressContainer: {
        height: 6,
        backgroundColor: COLORS.cardBorder,
        borderRadius: RADIUS.full,
        overflow: 'hidden',
    },
    progressBar: {
        height: '100%',
        backgroundColor: COLORS.success,
    },
});
