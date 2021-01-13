import React, { useState } from 'react';

import { View, TextInput, StyleSheet, Platform, Modal, Button, FlatList } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../config/colors';
import AppText from './AppText'
import defaultStyles from '../config/fontStyle'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import PickerItem from './PickerItem';


function AppTextInput({ icon, items, numberOfColumns = 1, onSelect, placeholder, PickerItemComponent = PickerItem, selectedItem, width = "100%" }) {

    const [isVisible, setIsVisible] = useState(false)

    return (
        <>
            <TouchableWithoutFeedback onPress={() => setIsVisible(true)}>
                <View style={[styles.container, { width }]}>
                    {icon && <MaterialCommunityIcons name={icon} size={30} color={colors.secondary} style={styles.icon} />}
                    {selectedItem ? (
                        <AppText style={styles.text}>{selectedItem.label}</AppText>
                    ) : (
                            <AppText style={styles.placeholder}>{placeholder}</AppText>
                        )
                    }


                    <MaterialCommunityIcons name="chevron-down" size={30} color={colors.secondary} />
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={isVisible} animationType="slide">
                <Button title="Close" onPress={() => setIsVisible(false)} />
                <FlatList
                    data={items}
                    keyExtractor={item => item.value.toString()}
                    numColumns={numberOfColumns}
                    renderItem={({ item }) => (
                        <PickerItemComponent
                            item={item}
                            label={item.label}
                            onPress={() => {
                                setIsVisible(false)
                                onSelect(item)
                            }
                            }
                        />
                    )}
                />
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ccc",
        borderRadius: 25,
        flexDirection: 'row',
        padding: 10,
        marginVertical: 20,
    },
    icon: {
        marginRight: 10,
    },
    text: {
        marginTop: 5,
        fontSize: 22,
        flex: 1
    },
    placeholder: {
        color: colors.ratings,
        flex: 1
    }
})

export default AppTextInput;