import React from 'react';
import { StyleSheet, View } from 'react-native';

interface DecorationProps {
    positions: { x: number; y: number }[];
    screenWidth: number;
}

export function PathDecorations({ positions, screenWidth }: DecorationProps) {
    // Generate decorative elements based on path positions
    const decorations = React.useMemo(() => {
        const items: Array<{ x: number; y: number; type: string; size: number; variant?: number }> = [];

        positions.forEach((pos, index) => {
            // Determine which side has more space
            const leftSpace = pos.x;
            const rightSpace = screenWidth - pos.x;

            // Add decorations on the side with more space
            if (leftSpace > 80) {
                // Left side decorations - more frequent
                if (index % 2 === 0) {
                    items.push({
                        x: pos.x - 80 - Math.random() * 30,
                        y: pos.y - 30 + Math.random() * 60,
                        type: 'tree',
                        size: 35 + Math.random() * 15,
                        variant: Math.floor(Math.random() * 2),
                    });
                }
                if (index % 3 === 1) {
                    items.push({
                        x: pos.x - 95 - Math.random() * 20,
                        y: pos.y + Math.random() * 40,
                        type: 'bush',
                        size: 25 + Math.random() * 10,
                    });
                }
                if (index % 4 === 2) {
                    items.push({
                        x: pos.x - 85,
                        y: pos.y + 10 + Math.random() * 20,
                        type: 'rock',
                        size: 20 + Math.random() * 10,
                    });
                }
            }

            if (rightSpace > 80) {
                // Right side decorations
                if (index % 2 === 1) {
                    items.push({
                        x: pos.x + 80 + Math.random() * 30,
                        y: pos.y - 30 + Math.random() * 60,
                        type: 'tree',
                        size: 35 + Math.random() * 15,
                        variant: Math.floor(Math.random() * 2),
                    });
                }
                if (index % 3 === 0) {
                    items.push({
                        x: pos.x + 95 + Math.random() * 20,
                        y: pos.y + Math.random() * 40,
                        type: 'bush',
                        size: 25 + Math.random() * 10,
                    });
                }
                if (index % 5 === 3) {
                    items.push({
                        x: pos.x + 85,
                        y: pos.y + 10 + Math.random() * 20,
                        type: 'flower',
                        size: 18 + Math.random() * 8,
                    });
                }
            }
        });

        return items;
    }, [positions, screenWidth]);

    const renderDecoration = (item: typeof decorations[0], index: number) => {
        switch (item.type) {
            case 'tree':
                return (
                    <View
                        key={`dec-${index}`}
                        style={[
                            styles.tree,
                            {
                                left: item.x - item.size / 2,
                                top: item.y - item.size * 1.2,
                                width: item.size,
                                height: item.size * 1.5,
                            },
                        ]}
                    >
                        {/* Tree crown - darker green */}
                        <View
                            style={[
                                styles.treeCrown,
                                {
                                    width: item.size,
                                    height: item.size,
                                    backgroundColor: item.variant === 0 ? '#15803d' : '#166534',
                                }
                            ]}
                        />
                        {/* Tree trunk */}
                        <View style={[styles.treeTrunk, { width: item.size * 0.25, height: item.size * 0.4 }]} />
                    </View>
                );

            case 'bush':
                return (
                    <View
                        key={`dec-${index}`}
                        style={[
                            styles.bush,
                            {
                                left: item.x - item.size / 2,
                                top: item.y - item.size / 2,
                                width: item.size,
                                height: item.size * 0.7,
                                backgroundColor: '#22c55e',
                            },
                        ]}
                    />
                );

            case 'rock':
                return (
                    <View
                        key={`dec-${index}`}
                        style={[
                            styles.rock,
                            {
                                left: item.x - item.size / 2,
                                top: item.y - item.size / 2,
                                width: item.size,
                                height: item.size * 0.7,
                            },
                        ]}
                    />
                );

            case 'flower':
                return (
                    <View
                        key={`dec-${index}`}
                        style={[
                            styles.flower,
                            {
                                left: item.x - item.size / 2,
                                top: item.y - item.size / 2,
                                width: item.size,
                                height: item.size,
                            },
                        ]}
                    >
                        {/* Flower petals */}
                        <View style={[styles.petal, { backgroundColor: '#fbbf24' }]} />
                        {/* Flower center */}
                        <View style={styles.flowerCenter} />
                    </View>
                );

            default:
                return null;
        }
    };

    return (
        <View style={styles.container} pointerEvents="none">
            {decorations.map((item, index) => renderDecoration(item, index))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        zIndex: -1,
    },
    tree: {
        position: 'absolute',
        alignItems: 'center',
        opacity: 0.7,
    },
    treeCrown: {
        borderRadius: 100,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    treeTrunk: {
        backgroundColor: '#92400e',
        borderRadius: 4,
        marginTop: -8,
    },
    bush: {
        position: 'absolute',
        borderRadius: 100,
        opacity: 0.6,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.15,
        shadowRadius: 2,
    },
    rock: {
        position: 'absolute',
        backgroundColor: '#94a3b8',
        borderRadius: 12,
        opacity: 0.5,
    },
    flower: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.7,
    },
    petal: {
        width: '100%',
        height: '100%',
        borderRadius: 100,
    },
    flowerCenter: {
        position: 'absolute',
        width: '40%',
        height: '40%',
        backgroundColor: '#f59e0b',
        borderRadius: 100,
    },
});
