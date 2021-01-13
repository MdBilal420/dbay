import React from 'react';

import { View, TextInput, StyleSheet, Platform } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../config/colors';
import defaultStyles from '../config/fontStyle'


function AppTextInput({ icon, width = "100%", ...otherInputs }) {
    return (
        <View style={[styles.container, { width }]}>
            {icon && <MaterialCommunityIcons name={icon} size={25} color={colors.secondary} style={styles.icon} />}
            <TextInput {...otherInputs} style={defaultStyles.text} />
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ccc",
        borderRadius: 25,
        flexDirection: 'row',
        padding: 10,
        marginVertical: 10,
    },
    icon: {
        marginRight: 10
    }
})

export default AppTextInput;