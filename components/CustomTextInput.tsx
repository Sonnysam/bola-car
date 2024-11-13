import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, TextStyle, ViewStyle, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';


interface TextInputProps {
    label?: string;
    placeholder: string;
    value: string;
    onChangeText: (text: string) => void;
    secureTextEntry?: boolean;
    keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
    autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
    autoCorrect?: boolean;
    style?: ViewStyle;
    labelStyle?: TextStyle;
    inputStyle?: TextStyle;
    isPassword?: boolean;
    required?: string;
}

const CustomTextInput: React.FC<TextInputProps> = ({
    label,
    placeholder,
    value,
    onChangeText,
    secureTextEntry = false,
    keyboardType = 'default',
    autoCapitalize = 'none',
    autoCorrect = false,
    style,
    labelStyle,
    inputStyle,
    isPassword = false,
    required
}) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <View style={[styles.container, style]}>
            {/* <ScrollView
            contentContainerStyle={{
                flexGrow: 1,
                justifyContent: 'center',
            }}
        > */}
            <Text style={[styles.label, labelStyle]}>{label} <Text style={styles.required}>{required}</Text></Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={[styles.input, inputStyle]}
                    placeholder={placeholder}
                    placeholderTextColor={Colors.gray}
                    value={value}
                    onChangeText={onChangeText}
                    secureTextEntry={isPassword ? !showPassword : secureTextEntry}
                    keyboardType={keyboardType}
                    autoCapitalize={autoCapitalize}
                    autoCorrect={autoCorrect}
                    cursorColor={Colors.primary}
                />
                {isPassword && (
                    <TouchableOpacity onPress={togglePasswordVisibility} style={styles.passwordToggle}>
                        <Ionicons name={showPassword ? 'eye-off' : 'eye'} size={24} color="gray" />
                    </TouchableOpacity>
                )}
            </View>
            {/* </ScrollView> */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 16,
    },
    label: {
        fontSize: 16,
        marginBottom: 8,
        fontWeight: 'bold',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: Colors.lightGrey,
        borderRadius: 5,
        backgroundColor: Colors.lightGrey,
        opacity: 0.5,
        height: 50,
    },
    input: {
        flex: 1,
        // height: 40,
        paddingHorizontal: 10,
        fontSize: 16,
    },
    passwordToggle: {
        padding: 10,
    },
    required: {
        color: Colors.primary,
        fontSize: 13,
        fontWeight: "bold"
    }
});

export default CustomTextInput;