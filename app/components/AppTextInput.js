import React from 'react';

import { View, TextInput, StyleSheet, Platform } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../config/colors';

function AppTextInput({ icon, ...otherInputs }) {
    return (
        <View style={styles.container}>
            {icon && <MaterialCommunityIcons name={icon} size={30} color={colors.secondary} />}
            <TextInput {...otherInputs} style={styles.textInput} />
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ccc",
        borderRadius: 25,
        flexDirection: 'row',
        padding: 10,
        marginVertical: 20,
        width: '100%'
    },
    textInput: {
        marginLeft: 10,
        fontSize: 18,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
        color: colors.secondary
    }
})

export default AppTextInput;