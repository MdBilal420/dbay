import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../config/colors';

function Icon({ name, backgroundColor, size, iconColor = colors.ratings }) {

    return (
        <View style={{
            width: size,
            height: size,
            borderRadius: size / 2,
            backgroundColor,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <MaterialCommunityIcons name={name} color={backgroundColor === colors.primary ? colors.secondary : colors.white} size={size / 2} />
        </View>
    );
}

const styles = StyleSheet.create({
    // container: {
    //     backgroundColor: 'black'

    // }
})

export default Icon;