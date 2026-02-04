import { COLORS } from '@/constants/theme';
import React, { useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface PathRendererProps {
    positions: { x: number; y: number }[];
    completedCount: number;
}

export function PathRenderer({ positions, completedCount }: PathRendererProps) {
    if (positions.length < 2) return null;

    // Generate SVG path string for smooth S-curves between nodes
    const pathString = useMemo(() => {
        let pathData = `M ${positions[0].x} ${positions[0].y}`;

        for (let i = 1; i < positions.length; i++) {
            const curr = positions[i];
            const prev = positions[i - 1];

            // Calculate midpoint
            const midY = (prev.y + curr.y) / 2;

            // Create smooth S-curve using quadratic bezier
            // Control point is at the midpoint Y, but at the previous X
            pathData += ` Q ${prev.x} ${midY}, ${curr.x} ${curr.y}`;
        }

        return pathData;
    }, [positions]);

    // Calculate approximate path length for each segment
    const segmentLength = useMemo(() => {
        if (positions.length < 2) return 0;

        let totalLength = 0;
        for (let i = 1; i < positions.length; i++) {
            const curr = positions[i];
            const prev = positions[i - 1];
            const dx = curr.x - prev.x;
            const dy = curr.y - prev.y;
            // Approximate curve length (slightly longer than straight line)
            totalLength += Math.sqrt(dx * dx + dy * dy) * 1.2;
        }
        return totalLength / positions.length;
    }, [positions]);

    // Calculate how much of the path should be green
    const completedLength = completedCount * segmentLength;

    return (
        <View style={styles.container} pointerEvents="none">
            <Svg height="100%" width="100%" style={StyleSheet.absoluteFill}>
                {/* Background path (gray) */}
                <Path
                    d={pathString}
                    stroke={COLORS.cardBorder}
                    strokeWidth={6}
                    fill="none"
                    strokeLinecap="round"
                    opacity={0.3}
                />

                {/* Completed path overlay (green) */}
                {completedCount > 0 && (
                    <Path
                        d={pathString}
                        stroke={COLORS.success}
                        strokeWidth={6}
                        fill="none"
                        strokeLinecap="round"
                        strokeDasharray={`${completedLength} ${10000}`}
                        strokeDashoffset={0}
                    />
                )}
            </Svg>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        zIndex: 0,
    },
});
