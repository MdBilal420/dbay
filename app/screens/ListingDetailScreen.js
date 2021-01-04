import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import AppText from '../components/AppText';
import ListItem from '../components/ListItem'
import colors from '../config/colors';

function ListingDetailScreen(props) {
    return (
        <View>
            <Image style={styles.image} source={require("../assets/bike.jpg")} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>Bike on sale</AppText>
                <AppText style={styles.price}>$39</AppText>
            </View>
            <View style={styles.userContainer}>
                <ListItem
                    image={require("../assets/user1.jpg")}
                    name="James Bond"
                    ratings="5 ratings"
                />
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    detailsContainer: {
        padding: 20
    },
    image: {
        height: 300,
        width: '100%'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.secondary,
    },
    price: {
        color: colors.brown
    },
    userContainer: {
        marginVertical: 40
    }
})

export default ListingDetailScreen;