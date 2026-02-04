import { GradientBackground } from '@/components/ui/GradientBackground';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { COLORS, SPACING } from '@/constants/theme';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withDelay, withSequence, withSpring, withTiming } from 'react-native-reanimated';

const { width } = Dimensions.get('window');

const Particle = ({ delay }: { delay: number }) => {
    const translateY = useSharedValue(-20);
    const translateX = useSharedValue(Math.random() * width - width / 2);
    const opacity = useSharedValue(1);

    useEffect(() => {
        translateY.value = withDelay(delay, withTiming(width * 1.5, { duration: 2000 }));
        opacity.value = withDelay(delay + 1500, withTiming(0, { duration: 500 }));
    }, []);

    const style = useAnimatedStyle(() => ({
        transform: [
            { translateY: translateY.value },
            { translateX: translateX.value },
            { rotate: `${translateY.value}deg` }
        ],
        opacity: opacity.value,
        position: 'absolute',
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: ['#FCD34D', '#34D399', '#60A5FA', '#F472B6'][Math.floor(Math.random() * 4)],
    }));

    return <Animated.View style={style} />;
};

export default function LevelCompleteScreen() {
    const router = useRouter();
    const scale = useSharedValue(0);
    const opacity = useSharedValue(0);

    useEffect(() => {
        scale.value = withSequence(
            withSpring(1.2),
            withSpring(1)
        );
        opacity.value = withDelay(500, withSpring(1));
    }, []);

    const animatedIconStyle = useAnimatedStyle(() => ({
        transform: [{ scale: scale.value }],
    }));

    const animatedContentStyle = useAnimatedStyle(() => ({
        opacity: opacity.value,
        transform: [{ translateY: withSpring(opacity.value === 1 ? 0 : 50) }]
    }));

    const handleContinue = () => {
        router.replace('/levels' as any);
    };

    return (
        <GradientBackground style={styles.container}>
            {Array.from({ length: 20 }).map((_, i) => (
                <Particle key={i} delay={i * 100} />
            ))}

            <View style={styles.content}>
                <Animated.View style={[styles.iconContainer, animatedIconStyle]}>
                    <Image
                        source={require('@/assets/images/celebration.png')}
                        style={styles.image}
                        resizeMode="contain"
                    />
                </Animated.View>

                <Animated.View style={[styles.textContainer, animatedContentStyle]}>
                    <Text style={styles.title}>Level Completed!</Text>
                    <Text style={styles.subtitle}>You earned 50 XP</Text>

                    <View style={styles.stats}>
                        <View style={styles.statItem}>
                            <Ionicons name="star" size={24} color="#FFD700" />
                            <Text style={styles.statValue}>3/3</Text>
                            <Text style={styles.statLabel}>Stars</Text>
                        </View>
                        <View style={styles.statItem}>
                            <Ionicons name="time" size={24} color="#60A5FA" />
                            <Text style={styles.statValue}>2m</Text>
                            <Text style={styles.statLabel}>Time</Text>
                        </View>
                    </View>
                </Animated.View>
            </View>

            <View style={styles.footer}>
                <PrimaryButton title="Unlock Next Level" onPress={handleContinue} />
            </View>
        </GradientBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: SPACING.xl,
    },
    iconContainer: {
        width: width * 0.8,
        height: width * 0.8,
        marginBottom: SPACING.xl,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    textContainer: {
        alignItems: 'center',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: COLORS.text,
        marginBottom: SPACING.s,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 18,
        color: COLORS.textSecondary,
        marginBottom: SPACING.xl,
    },
    stats: {
        flexDirection: 'row',
        gap: SPACING.xl,
    },
    statItem: {
        alignItems: 'center',
        backgroundColor: COLORS.card,
        padding: SPACING.m,
        borderRadius: 16,
        minWidth: 100,
    },
    statValue: {
        fontSize: 20,
        fontWeight: 'bold',
        color: COLORS.text,
        marginTop: SPACING.xs,
    },
    statLabel: {
        fontSize: 12,
        color: COLORS.textSecondary,
    },
    footer: {
        padding: SPACING.l,
        paddingBottom: SPACING.xl,
    },
});
