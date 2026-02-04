import { COLORS, RADIUS, SPACING } from '@/constants/theme';
import { Ionicons } from '@expo/vector-icons';
import React, { useEffect } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withDelay, withRepeat, withSequence, withSpring } from 'react-native-reanimated';

interface LessonNodeProps {
    type: 'lesson' | 'quiz' | 'question';
    index: number;
    title: string;
    isCompleted: boolean;
    isLocked?: boolean;
    isActive?: boolean;
    size?: 'small' | 'medium' | 'large';
    stars?: number;
    onPress: () => void;
    delay?: number;
}

export function LessonNode({
    type,
    index,
    title,
    isCompleted,
    isLocked = false,
    isActive = false,
    size = 'medium',
    stars = 0,
    onPress,
    delay = 0
}: LessonNodeProps) {
    const scale = useSharedValue(0);
    const floatY = useSharedValue(0);

    useEffect(() => {
        // Entry animation
        scale.value = withDelay(delay, withSpring(1, { damping: 8, stiffness: 100 }));

        // Floating animation for active nodes
        if (isActive && !isLocked) {
            floatY.value = withRepeat(
                withSequence(
                    withSpring(-5, { damping: 2, stiffness: 50 }),
                    withSpring(0, { damping: 2, stiffness: 50 })
                ),
                -1,
                true
            );
        }
    }, [delay, isActive, isLocked]);

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [
            { scale: scale.value },
            { translateY: floatY.value }
        ],
    }));

    const getNodeSize = () => {
        switch (size) {
            case 'small': return 60;
            case 'large': return 90;
            default: return 70;
        }
    };

    const nodeSize = getNodeSize();

    const getIconName = (): any => {
        if (isLocked) return 'lock-closed';
        if (isCompleted) return 'checkmark';
        if (type === 'quiz') return 'trophy';
        if (type === 'question') return 'help-circle';
        return 'book';
    };

    const getBackgroundColor = () => {
        if (isLocked) return COLORS.cardBorder;
        if (isCompleted) return COLORS.success;
        if (type === 'quiz') return COLORS.warning;
        if (type === 'question') return COLORS.secondary;
        return COLORS.primary;
    };

    const renderStars = () => {
        if (!isCompleted || stars === 0) return null;

        return (
            <View style={styles.starsContainer}>
                {[1, 2, 3].map((star) => (
                    <Ionicons
                        key={star}
                        name={star <= stars ? 'star' : 'star-outline'}
                        size={12}
                        color="#FFD700"
                    />
                ))}
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <Animated.View style={[animatedStyle]}>
                <Pressable
                    onPress={isLocked ? undefined : onPress}
                    disabled={isLocked}
                    style={({ pressed }) => [
                        styles.node,
                        {
                            width: nodeSize,
                            height: nodeSize,
                            backgroundColor: getBackgroundColor(),
                            opacity: pressed ? 0.8 : 1,
                            borderWidth: isActive ? 4 : 0,
                            borderColor: '#fff',
                        }
                    ]}
                >
                    <Ionicons
                        name={getIconName()}
                        size={nodeSize * 0.5}
                        color="#fff"
                    />
                </Pressable>
            </Animated.View>

            {renderStars()}

            <Text style={[styles.title, { maxWidth: nodeSize + 40 }]} numberOfLines={2}>
                {title}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginVertical: SPACING.s,
    },
    node: {
        borderRadius: RADIUS.full,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 8,
    },
    starsContainer: {
        flexDirection: 'row',
        marginTop: SPACING.xs,
        gap: 2,
    },
    title: {
        fontSize: 12,
        fontWeight: '600',
        color: COLORS.text,
        textAlign: 'center',
        marginTop: SPACING.xs,
    },
});
