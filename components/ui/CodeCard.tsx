import { COLORS, RADIUS, SPACING } from '@/constants/theme';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Props {
    code: string;
}

export function CodeCard({ code }: Props) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={[styles.dot, { backgroundColor: '#FF5F56' }]} />
                <View style={[styles.dot, { backgroundColor: '#FFBD2E' }]} />
                <View style={[styles.dot, { backgroundColor: '#27C93F' }]} />
            </View>
            <View style={styles.content}>
                <Text style={styles.code}>{code}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0F172A', // Darker than card
        borderRadius: RADIUS.m,
        borderWidth: 1,
        borderColor: COLORS.cardBorder,
        overflow: 'hidden',
        marginVertical: SPACING.m,
    },
    header: {
        flexDirection: 'row',
        padding: SPACING.s,
        backgroundColor: '#1E293B',
        borderBottomWidth: 1,
        borderBottomColor: COLORS.cardBorder,
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginRight: 6,
    },
    content: {
        padding: SPACING.m,
    },
    code: {
        fontFamily: 'monospace', // Ensure this font is loaded or use 'monospace'
        color: '#38BDF8', // Cyan 400
        fontSize: 14,
        lineHeight: 22,
    },
});
