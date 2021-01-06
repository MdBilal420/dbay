import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import Icon from '../components/Icon';
import ListItem from '../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from '../components/Screen';
import colors from '../config/colors';

const menuItems = [
    {
        title: "My Listings",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.brown
        }
    },
    {
        title: "My Messages",
        icon: {
            name: "email",
            backgroundColor: colors.secondary
        }
    }
]

function AccountScreen(props) {
    return (
        <Screen style={styles.screen}>
            <View style={{ marginVertical: 20 }}>
                <ListItem
                    title="James Bond"
                    subTitle="jbond007@mail.com"
                    image={require("../assets/user1.jpg")}
                />
            </View>
            <View style={{ marginVertical: 20, backgroundColor: colors.primary }}>
                <FlatList
                    data={menuItems}
                    ItemSeparatorComponent={ListItemSeparator}
                    keyExtractor={(menuItem) => menuItem.title}
                    renderItem={({ item }) =>
                        <ListItem
                            title={item.title}
                            IconComponent={
                                <Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor} size={50} />
                            }
                        />
                    }

                />
            </View>
            <ListItem
                title="Log Out"
                IconComponent={
                    <Icon name="logout" backgroundColor="gray" size={50} />
                }
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.white
    }
})

export default AccountScreen;