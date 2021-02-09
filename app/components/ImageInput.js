import React, { useEffect } from 'react';
import { View, StyleSheet, Image, TouchableWithoutFeedback, Alert } from 'react-native';
import colors from '../config/colors';

import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';

import { MaterialCommunityIcons } from '@expo/vector-icons'


function ImageInput({ imageUri, onChangeImage }) {

    useEffect(() => {
        requestPerm();
    }, [])

    const requestPerm = async () => {
        Permissions.askAsync(Permissions.CONTACTS, Permissions.MEDIA_LIBRARY)
        const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (!granted) alert("Not allowed")

    }



    const handlePress = () => {
        if (!imageUri) selectImage();
        else {
            Alert.alert("Delete", "Are you sure you want to delete this image?", [
                { text: "YES", onPress: () => onChangeImage(null) },
                { text: "No" }
            ])
        }
    }

    const selectImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({ mediaTypes: ImagePicker.MediaTypeOptions.Image, quality: 0.5 });
            if (!result.cancelled)
                onChangeImage(result.uri);

        } catch (error) {
            console.log("error is ", error)
        }
    }

    return (
        <TouchableWithoutFeedback onPress={handlePress}>
            <View style={styles.container}>
                {!imageUri && <MaterialCommunityIcons name={'camera'} size={40} />}
                {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
            </View>
        </TouchableWithoutFeedback>

    );
}


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: colors.primary,
        borderRadius: 15,
        height: 100,
        justifyContent: 'center',
        width: 100,
        overflow: 'hidden'
    },
    image: {
        height: '100%',
        width: '100%',

    }

});

export default ImageInput;