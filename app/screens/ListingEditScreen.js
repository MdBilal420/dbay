import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import CategoryPickerItem from "../components/CategoryPickerItem";

import {
    AppForm as Form,
    AppFormField as FormField,
    AppFormPicker as Picker,
    SubmitButton,
} from "../components/forms";
import AppFormImagePicker from "../components/forms/AppFormImagePicker";
import Screen from "../components/Screen";

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    description: Yup.string().label("Description"),
    category: Yup.object().required().nullable().label("Category"),
    images: Yup.array().min(1, "Please provide atleast one image")
});

const categories = [
    { label: "Furniture", value: 1, backgroundColor: '#d3d3d5', icon: 'table-furniture' },
    { label: "Clothing", value: 2, backgroundColor: '#5e87c4', icon: 'shoe-heel' },
    { label: "Camera", value: 3, backgroundColor: '#384963', icon: 'camera' },
    { label: "Sports", value: 4, backgroundColor: '#857373', icon: 'basketball' },
    { label: "Music & Movies", value: 5, backgroundColor: '#e05353', icon: 'music' },
    { label: "Books", value: 6, backgroundColor: 'brown', icon: 'book-open-variant' },
    { label: "Games", value: 7, backgroundColor: '#ad5757', icon: 'cards' },
    { label: "Cars", value: 8, backgroundColor: '#e0b4b4', icon: 'car' },
    { label: "Other", value: 9, backgroundColor: '#9e97d1', icon: 'crop-square' },
];

function ListingEditScreen() {
    return (
        <Screen style={styles.container}>
            <Form
                initialValues={{
                    title: "",
                    price: "",
                    description: "",
                    category: null,
                    images: []
                }}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormImagePicker name="images" />
                <FormField maxLength={255} name="title" placeholder="Title" />
                <FormField
                    keyboardType="numeric"
                    maxLength={8}
                    name="price"
                    placeholder="Price"
                    width={120}
                />
                <Picker items={categories} name="category"
                    //  numberOfColumns={3}  PickerItemComponent={CategoryPickerItem}
                    placeholder="Category" width="50%" />
                <FormField
                    maxLength={255}
                    multiline
                    name="description"
                    numberOfLines={3}
                    placeholder="Description"
                />
                <SubmitButton title="Post" />
            </Form>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
});
export default ListingEditScreen;
