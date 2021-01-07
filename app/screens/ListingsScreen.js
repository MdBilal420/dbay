import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Card from '../components/Card';
import Icon from '../components/Icon';
import ListItem from '../components/ListItem';

import Screen from '../components/Screen'
import colors from '../config/colors';

const listings = [
    {
        id: 1,
        name: "Ride the Bike",
        price: "19.99",
        image: require("../assets/bike.jpg")
    },
    {
        id: 2,
        name: "Couch on Sale",
        price: "39.99",
        image: require("../assets/couch.jpg")
    }
]

function ListingsScreen(props) {

    return (
        <Screen style={styles.screen}>
            <FlatList
                data={listings}
                keyExtractor={listing => listing.id.toString()}
                renderItem={({ item }) => (
                    <Card
                        title={item.name}
                        subTitle={item.price}
                        image={item.image}
                    />
                )}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: colors.primary
    }
})

export default ListingsScreen;