import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

function ListItemDeleteAction({ onPress }) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <MaterialCommunityIcons name="trash-can-outline" color="white" size={30} />
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 90,
        height: '100%',
        backgroundColor: colors.secondary,
        justifyContent: 'center',
        alignItems: 'center'
    },
})

export default ListItemDeleteAction;