import React from 'react';
import { Image, ImageBackground, StyleSheet, View, Text } from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground
            style={styles.background}
            source={require("../assets/wc1.jpg")}
        >
            <Image
                style={styles.logo}
                source={require("../assets/logoq.png")}
            />
            <Text>where buyers meet sellers</Text>
            <View style={styles.loginButton}></View>
            <View style={styles.signupButton}></View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    loginButton: {
        width: '100%',
        height: 50,
        backgroundColor: 'white'
    },
    signupButton: {
        width: '100%',
        height: 50,
        backgroundColor: '#542075'
    },
    logo: {
        height: 300,
        width: 300,
        position: 'absolute',
        top: -20
    },
    tagline: {
        top: -10,
        position: 'absolute'
    }
})

export default WelcomeScreen;