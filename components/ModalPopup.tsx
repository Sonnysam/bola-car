import React, { useState, useEffect } from 'react';
import {
    View,
    StyleSheet,
    Modal,
    TouchableOpacity,
    Text,
    ViewStyle,
    StyleProp,
} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';

interface ModalPopUpProps {
    visible: boolean;
    onClose: () => void;
    children: React.ReactNode;
    title?: string;
    containerStyle?: StyleProp<ViewStyle>;
}

const ModalPopUp: React.FC<ModalPopUpProps> = ({
    visible,
    onClose,
    children,
    title,
    containerStyle,
}) => {
    const [showModal, setShowModal] = useState(visible);

    useEffect(() => {
        toggleModal();
    }, [visible]);

    const toggleModal = () => {
        if (visible) {
            setShowModal(true);
        } else {
            setTimeout(() => setShowModal(false), 200);
        }
    };

    return (
        <Modal transparent visible={showModal} animationType="fade">
            <View style={styles.modalBackground}>
                <View style={[styles.modalContainer, containerStyle]}>
                    <View style={styles.header}>
                        {title && <Text style={styles.title}>{title}</Text>}
                        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                            <Entypo name="cross" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                    {children}
                </View>
            </View>
        </Modal>
    );
};

interface InfoButtonProps {
    onPress: () => void;
    style?: StyleProp<ViewStyle>;
}

const InfoButton: React.FC<InfoButtonProps> = ({ onPress, style }) => (
    <TouchableOpacity style={[styles.infoButton, style]} onPress={onPress}>
        <Entypo name="info" size={24} color="white" />
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        width: '80%',
        backgroundColor: Colors.light,
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderRadius: 20,
        elevation: 20,
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    closeButton: {
        padding: 5,
    },
    infoButton: {
        backgroundColor: Colors.alt,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        padding: 10,
        elevation: 10,
    },
});

export { ModalPopUp, InfoButton };