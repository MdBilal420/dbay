import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import colors from '../config/colors';

import { MaterialCommunityIcons } from "@expo/vector-icons"

function ViewImageScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}>
                <MaterialCommunityIcons name="close" color="white" size={30} />
            </View>
            <View style={styles.deleteIcon}>
                <MaterialCommunityIcons name="trash-can-outline" color="white" size={30} />
            </View>
            <Image
                resizeMode="contain"
                style={styles.image}
                source={require("../assets/item1.jpg")}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: "black",
        flex: 1
    },
    closeIcon: {
        position: 'absolute',
        top: 40,
        left: 30
    },
    deleteIcon: {
        position: 'absolute',
        top: 40,
        right: 30
    },
    image: {
        height: '100%',
        width: '100%'
    }
})
export default ViewImageScreen;