import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { Asset } from "expo-asset";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { updateAuth } from "@/store/slice/auth";

export default function CustomImagePicker() {
    const dispatch = useAppDispatch();
    const [facePhoto, setFacePhoto] = useState<any>(null);
    const [ghanaCardPhoto, setGhanaCardPhoto] = useState<any>(null);
    const [photo, setPhoto] = useState<string | null>(null);

    const { profilePhoto } = useAppSelector((state) => state.auth)

    const pickImage = async (setPhoto: {
        (value: React.SetStateAction<null>): void;
        (value: React.SetStateAction<null>): void;
        (arg0: string): void;
    }) => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        if (!result.canceled) {
            setPhoto(result.assets[0].uri);
        }
    };

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.label}>Upload a photo <Text style={styles.required}>(preferably a headshot)</Text></Text>
            </View>
            <View style={styles.uploadSection}>
                <View style={styles.button}>
                    <TouchableOpacity
                        style={styles.upload}
                        onPress={() => {
                            pickImage(setFacePhoto)
                            dispatch(updateAuth({ profilePhoto }))
                        }}
                    >
                        <Text>Upload</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.text}>
                    <Image
                        style={styles.image}
                        source={facePhoto ? { uri: facePhoto } : require("../assets/images/no-result.png")}
                    />
                    <Text style={{ fontSize: 10 }}>{facePhoto ? "my_profile.png" : "No photo selected"}</Text>
                </View>
            </View>


            <View style={{ marginTop: 20 }}>
                <Text style={styles.label}>Upload photo of your Ghana card</Text>
            </View>
            <View style={styles.uploadSection}>
                <View style={styles.button}>
                    <TouchableOpacity
                        style={styles.upload}
                        onPress={() => {
                            pickImage(setGhanaCardPhoto)
                            dispatch(updateAuth({ ghanaCard }))
                        }}
                    >
                        <Text>Upload</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.text}>
                    <Image
                        style={styles.ghanaCardImage}
                        source={ghanaCardPhoto ? { uri: ghanaCardPhoto } : require("../assets/images/no-result.png")}
                    />
                    <Text style={{ fontSize: 10 }}> {ghanaCardPhoto ? "my_ghana_card.png" : "Please upload Ghana card"}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.light,
    },
    backButton: {
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 30,
    },
    uploadSection: {
        backgroundColor: Colors.grey,
        borderRadius: 8,
        borderColor: Colors.grey,
        padding: 10,
        width: "100%",
        height: 100,
        marginVertical: 10,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    upload: {
        justifyContent: 'center',
        alignItems: "center"
    },
    button: {
        width: "30%",
        height: 55,
        backgroundColor: Colors.primary,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
    },
    text: {
        width: "70%",
        fontSize: 16,
        color: Colors.dark,
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    ghanaCardImage: {
        width: 80,
        height: 60,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    required: {
        color: Colors.primary,
    },
});
