import React from 'react';
import { TouchableOpacity, StyleSheet, ViewStyle } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { Colors } from '@/constants/Colors';


interface CustomBackArrowProps {
    onPress?: () => void;
    color?: string;
    size?: number;
    style?: ViewStyle;
    backgroundColor?: string;
}

const CustomBackButton: React.FC<CustomBackArrowProps> = ({
    onPress,
    color = Colors.light,
    size = 28,
    style,
    backgroundColor = Colors.primary,
}) => {

    const handlePress = () => {
        if (onPress) {
            onPress();
        } else {
            router.back();
        }
    };

    return (
        <TouchableOpacity
            onPress={handlePress}
            style={[
                styles.arrowContainer,
                { backgroundColor },
                style
            ]}
        >
            <MaterialIcons name="keyboard-arrow-left" size={size} color={color} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    arrowContainer: {
        width: 40,
        height: 40,
        borderTopLeftRadius: 8,
        borderBottomRightRadius: 8,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default CustomBackButton;