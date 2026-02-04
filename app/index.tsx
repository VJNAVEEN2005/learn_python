import { GradientBackground } from '@/components/ui/GradientBackground';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { COLORS, SPACING } from '@/constants/theme';
import { useProgress } from '@/context/ProgressContext';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Animated, Image, Pressable, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
    const router = useRouter();
    const { userStats, resetProgress } = useProgress();

    // Animation values
    const floatingAnim = React.useRef(new Animated.Value(0)).current;

    React.useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(floatingAnim, {
                    toValue: 1,
                    duration: 2000,
                    useNativeDriver: true,
                }),
                Animated.timing(floatingAnim, {
                    toValue: 0,
                    duration: 2000,
                    useNativeDriver: true,
                }),
            ])
        ).start();
    }, []);

    const translateY = floatingAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [0, -15],
    });

    const handleStart = () => {
        router.push('/levels' as any);
    };

    return (
        <GradientBackground style={styles.container}>
            {/* Top Section: Streak & Progress */}
            <View style={styles.topBar}>
                <View style={styles.streakContainer}>
                    <Ionicons name="flame" size={24} color={COLORS.warning} />
                    <Text style={styles.streakText}>{userStats?.streak || 0}</Text>
                </View>
                <View style={styles.pointsContainer}>
                    <Ionicons name="star" size={20} color={COLORS.primary} />
                    <Text style={styles.pointsText}>{userStats?.points || 0} pts</Text>
                </View>
            </View>

            {/* Main Content: Mascot & Title */}
            <View style={styles.content}>
                <Animated.View style={[styles.mascotContainer, { transform: [{ translateY }] }]}>
                    <Image
                        source={require('@/assets/images/mascot.png')}
                        style={styles.mascot}
                        resizeMode="contain"
                    />
                </Animated.View>

                <Animated.View style={{ transform: [{ translateY: translateY.interpolate({ inputRange: [-15, 0], outputRange: [-5, 0] }) }] }}>
                    <Text style={styles.title}>Learn Python</Text>
                    <Text style={styles.subtitle}>Level up your coding skills</Text>
                </Animated.View>
            </View>

            {/* Footer: Action Button */}
            <View style={styles.footer}>
                <PrimaryButton title="Start Learning" onPress={handleStart} style={styles.button} />
                <Pressable
                    onPress={() => {
                        import('react-native').then(({ Alert }) => {
                            Alert.alert(
                                "Reset Progress?",
                                "This will clear all your progress, points, and streaks. This cannot be undone.",
                                [
                                    { text: "Cancel", style: "cancel" },
                                    {
                                        text: "Reset Everything",
                                        style: "destructive",
                                        onPress: async () => {
                                            await resetProgress();
                                        }
                                    }
                                ]
                            );
                        });
                    }}
                    style={styles.clearButton}
                >
                    <Text style={styles.clearButtonText}>Clear All Data</Text>
                </Pressable>
            </View>
        </GradientBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: SPACING.l,
        justifyContent: 'space-between',
    },
    topBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: SPACING.xl,
    },
    streakContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.card,
        paddingHorizontal: SPACING.m,
        paddingVertical: SPACING.xs,
        borderRadius: SPACING.l,
        borderWidth: 1,
        borderColor: COLORS.cardBorder,
    },
    streakText: {
        color: COLORS.warning,
        fontWeight: 'bold',
        marginLeft: SPACING.xs,
        fontSize: 16,
    },
    pointsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(56, 189, 248, 0.1)',
        paddingHorizontal: SPACING.m,
        paddingVertical: SPACING.xs,
        borderRadius: SPACING.l,
        borderWidth: 1,
        borderColor: 'rgba(56, 189, 248, 0.2)',
    },
    pointsText: {
        color: COLORS.primary,
        fontWeight: 'bold',
        marginLeft: SPACING.xs,
        fontSize: 14,
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    mascotContainer: {
        width: 250,
        height: 250,
        marginBottom: SPACING.l,
        justifyContent: 'center',
        alignItems: 'center',
    },
    mascot: {
        width: '100%',
        height: '100%',
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
        textAlign: 'center',
    },
    footer: {
        marginBottom: SPACING.xl,
    },
    button: {
        width: '100%',
        marginBottom: SPACING.m,
    },
    clearButton: {
        width: '100%',
        paddingVertical: SPACING.m,
        alignItems: 'center',
    },
    clearButtonText: {
        color: 'rgba(239, 68, 68, 0.7)',
        fontSize: 14,
        fontWeight: '600',
    },
});
