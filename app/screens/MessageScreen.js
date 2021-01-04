import React from 'react';
import { FlatList, View } from 'react-native';
import ListItem from '../components/ListItem';

const messages = [
    {
        id: 1,
        title: 'T1',
        description: 'D1',
        image: require("../assets/user1.jpg")
    },
    {
        id: 2,
        title: 'T2',
        description: 'D2',
        image: require("../assets/user1.jpg")
    }
]
function MessageScreen(props) {

    return (
        <FlatList
            data={messages}
            keyExtractor={message => message.id.toString()}
            renderItem={({ item }) => <ListItem
                title={item.title}
                subTitle={item.id}
                image={item.image}
            />
            }
        />
    );
}

export default MessageScreen;