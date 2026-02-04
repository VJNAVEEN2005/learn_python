import { COLORS, RADIUS } from '@/constants/theme';
import React, { useEffect } from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';

interface Props {
    progress: number; // 0 to 1
    style?: ViewStyle;
    color?: string;
    height?: number;
    useSpringType?: boolean;
}

export function ProgressBar({ progress, style, color = COLORS.primary, height = 8, useSpringType = false }: Props) {
    const animatedProgress = useSharedValue(0);

    useEffect(() => {
        animatedProgress.value = useSpringType
            ? withSpring(progress, { damping: 15, stiffness: 100 })
            : withTiming(progress, { duration: 800 });
    }, [progress, useSpringType]);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            width: `${animatedProgress.value * 100}%`,
        };
    });

    return (
        <View style={[styles.container, { height }, style]}>
            <Animated.View style={[styles.bar, { backgroundColor: color }, animatedStyle]} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: RADIUS.full,
        overflow: 'hidden',
        width: '100%',
    },
    bar: {
        height: '100%',
        borderRadius: RADIUS.full,
    },
});
