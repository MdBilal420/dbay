import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ListItem from '../components/ListItem';
import ListItemDeleteAction from '../components/ListItemDeleteAction';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from '../components/Screen';
import colors from '../config/colors';


const initialMessages = [
    {
        id: 1,
        title: 'James',
        description: 'Hello',
        image: require("../assets/user1.jpg")
    },
    {
        id: 2,
        title: 'Bond',
        description: 'How are you?',
        image: require("../assets/user1.jpg")
    }
]
function MessageScreen(props) {

    const [messages, setMessages] = useState(initialMessages);
    const [refresh, setRefresh] = useState(false)

    const handleDelete = (message) => {
        setMessages(messages.filter((m) => m.id !== message.id))
    }

    return (
        <Screen style={styles.screen}>
            <FlatList
                data={messages}
                keyExtractor={message => message.id.toString()}
                renderItem={({ item }) => <ListItem
                    image={item.image}
                    title={item.title}
                    subTitle={item.description}
                    onPress={() => console.log()}
                    renderRightActions={() => <ListItemDeleteAction onPress={() => handleDelete(item)} />}
                />
                }
                ItemSeparatorComponent={ListItemSeparator}
                refreshing={refresh}
                onRefresh={() => {
                    setMessages([{
                        id: 2,
                        title: 'Bond',
                        description: 'How are you?',
                        image: require("../assets/user1.jpg")
                    }])
                }}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.primary
    },
    swipe: {
        width: 70, backgroundColor: 'blue'
    }
})

export default MessageScreen;