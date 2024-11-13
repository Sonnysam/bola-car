import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MainContainer from './MainContainer'
import * as Animatable from "react-native-animatable";

export default function SuccessCircle() {
    // add a function to set timeOut on animation start and end
    return (
        <MainContainer>
            <View>
                <Animatable.Image
                    animation="pulse"
                    easing="ease-out"
                    iterationCount="infinite"
                    source={require("../assets/images/success.png")}
                    style={styles.image}
                    resizeMode="contain"
                ></Animatable.Image>
            </View>
        </MainContainer>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 180,
        height: 180,
    },
})