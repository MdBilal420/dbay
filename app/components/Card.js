import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';

function Card({ title, subTitle, image }) {
    return (
        <View style={styles.card}>
            <Image style={styles.image} source={image} />
            <View style={styles.detailContainer}>
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.subTitle}>{subTitle}</AppText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        marginBottom: 20,
        borderRadius: 15,
        backgroundColor: colors.white,
        overflow: 'hidden'
    },
    detailContainer: {
        padding: 20
    },
    image: {
        height: 200,
        width: '100%'
    },
    subTitle: {
        color: colors.brown,
        fontWeight: 'bold'
    },
    title: {
        marginBottom: 7,
        color: colors.secondary,
    }
})

export default Card;