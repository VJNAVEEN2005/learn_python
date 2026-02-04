import { GradientBackground } from '@/components/ui/GradientBackground';
import { LevelCard } from '@/components/ui/LevelCard';
import { LEVELS } from '@/constants/Data';
import { COLORS, SPACING } from '@/constants/theme';
import { useProgress } from '@/context/ProgressContext';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';

export default function LevelsScreen() {
    const router = useRouter();
    const { levelProgress } = useProgress();

    const handleLevelPress = (levelId: string) => {
        // Navigate to Lesson List
        router.push(`/lessons/${levelId}` as any);
    };

    const handleBack = () => {
        router.replace('/');
    };

    const renderLevelItem = ({ item }: { item: typeof LEVELS[0] }) => {
        const progressData = levelProgress[item.id] || { is_locked: item.id !== '1', progress: 0 };
        return (
            <LevelCard
                levelNumber={item.number}
                title={item.title}
                description={item.description}
                isLocked={progressData.is_locked}
                progress={progressData.progress}
                onPress={() => handleLevelPress(item.id)}
            />
        );
    };

    return (
        <GradientBackground style={styles.container}>
            <View style={styles.header}>
                <Pressable onPress={handleBack} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={24} color={COLORS.text} />
                </Pressable>
                <Text style={styles.headerTitle}>Campaign</Text>
                <View style={{ width: 24 }} />
            </View>

            <Animated.FlatList
                data={LEVELS}
                keyExtractor={(item) => item.id}
                renderItem={({ item, index }) => (
                    <Animated.View entering={FadeInDown.delay(index * 100 + 300).duration(500).springify()}>
                        {renderLevelItem({ item })}
                    </Animated.View>
                )}
                contentContainerStyle={styles.listContent}
                showsVerticalScrollIndicator={false}
            />
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
        // borderBottomWidth: 1,
        // borderBottomColor: COLORS.cardBorder,
    },
    backButton: {
        padding: SPACING.xs,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: COLORS.text,
    },
    listContent: {
        padding: SPACING.m,
        paddingBottom: SPACING.xxl,
    },
});
