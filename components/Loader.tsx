import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { Colors } from '@/constants/Colors';

interface LoaderProps {
    loading: boolean;
    text?: string;
}

export default function Loader({ loading, text }: LoaderProps) {
    if (!loading) return null;

    return (
        <View style={styles.overlay}>
            <View style={styles.container}>
                {text && <Text style={styles.text}>{text}</Text>}
                <ActivityIndicator size="large" color={Colors.primary} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    text: {
        fontSize: 16,
        marginBottom: 10,
        color: Colors.dark,
    },
});