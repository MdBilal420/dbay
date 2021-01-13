import React from 'react';
import { Image, StyleSheet, TouchableHighlight, View } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../config/colors';
import AppText from './AppText';

function ListItem({ title, subTitle, IconComponent, image, onPress, renderRightActions }) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight
                underlayColor={colors.primary}
                onPress={onPress}
            >
                <View style={styles.container}>
                    {IconComponent}
                    {image && <Image style={styles.image} source={image} />}
                    <View style={styles.detailContainer}>
                        <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
                        {subTitle && <AppText style={styles.subTitle} numberOfLines={2} >{subTitle}</AppText>}
                    </View>
                    <MaterialCommunityIcons name="chevron-right" size={25} />
                </View>
            </TouchableHighlight>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 15,
        backgroundColor: colors.white,
        alignItems: 'center',
    },
    detailContainer: {

        flex: 1,
        marginLeft: 10,
        justifyContent: 'center'
    },
    image: {
        height: 70,
        width: 70,
        borderRadius: 35,
        marginRight: 10
    },
    title: {
        fontWeight: '500',
    },
    subTitle: {
        color: colors.ratings
    }
})

export default ListItem;