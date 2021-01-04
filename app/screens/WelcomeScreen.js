import React from 'react';
import { Image, ImageBackground, StyleSheet, View, Text } from 'react-native';
import AppButton from '../components/AppButton';
import AppText from '../components/AppText';
import colors from '../config/colors';

function WelcomeScreen(props) {
    return (
        <ImageBackground
            blurRadius={5}
            style={styles.background}
            source={require("../assets/wc2.jpg")}
        >
            <View style={styles.logoContainer}>
                <Image
                    style={styles.logo}
                    source={require("../assets/logo3.png")}
                />
            </View>
            <View style={styles.buttonContainer}>
                <AppButton title="Login" />
                <AppButton title="Sign Up" color="secondary" textColor="primary" />
            </View>
            <View style={styles.signupButton}></View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: 20
    },
    buttonContainer: {
        padding: 20,
        width: '100%',
    },

    logo: {
        height: 250,
        width: 250,
    },
    logoContainer: {
        top: 5,
        position: 'absolute',
        alignItems: 'center'
    }
})

export default WelcomeScreen;