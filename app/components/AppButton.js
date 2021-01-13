import React from 'react';
import { Text, View, StyleSheet, TouchableNativeFeedback, TouchableOpacity } from 'react-native';

import colors from '../config/colors';


function AppButton({ title, color = "primary", textColor = "secondary", onPress }) {

    return (
        <TouchableOpacity style={[styles.button, { backgroundColor: colors[color] }]} onPress={onPress} >
            <Text style={[styles.text, { color: colors[textColor] }]}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 25,
        height: 45,
        justifyContent: 'center',
        alignContent: 'center',
        padding: 5,
        width: '100%',
        backgroundColor: colors.primary,
        marginBottom: 15,
        marginTop: 15
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.primary,
        alignSelf: 'center',
    }
})

export default AppButton;