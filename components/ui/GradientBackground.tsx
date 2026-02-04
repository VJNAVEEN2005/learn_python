import { COLORS } from '@/constants/theme';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';

interface Props extends ViewProps {
    children: React.ReactNode;
}

export function GradientBackground({ children, style, ...props }: Props) {
    return (
        <View style={[styles.container, style]} {...props}>
            <StatusBar style="light" />
            <LinearGradient
                colors={[COLORS.background, '#1e1b4b']} // Dark Slate to Deep Indigo
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={StyleSheet.absoluteFill}
            />
            {/* Overlay for subtle pattern effect could go here */}
            <View style={styles.content}>{children}</View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    content: {
        flex: 1,
    },
});
