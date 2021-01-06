import React from 'react';
import { Image, StyleSheet, TouchableHighlight, View } from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';
import Swipeable from 'react-native-gesture-handler/Swipeable';

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
                        <AppText style={styles.title}>{title}</AppText>
                        {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
                    </View>
                </View>
            </TouchableHighlight>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 15,
        backgroundColor: colors.primary
    },
    detailContainer: {
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