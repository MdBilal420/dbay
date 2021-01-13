import React, { useState } from 'react';
import { Image, View, StyleSheet } from 'react-native';

import { Formik } from 'formik';
import * as Yup from 'yup';

import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import Screen from '../components/Screen';
import AppText from '../components/AppText';
import ErrorText from '../components/forms/ErrorText';
import AppFormField from '../components/forms/AppFormField';
import SubmitButton from '../components/forms/SubmitButton';
import AppForm from '../components/forms/AppForm';

function LoginScreen(props) {

    const validationSchema = Yup.object().shape({
        email: Yup.string().required().email().label("Email"),
        password: Yup.string().required().min(3).label("Password")
    })

    return (
        <Screen style={styles.container}>
            <Image style={styles.logo} source={require("../assets/logo3.png")} />

            <AppForm
                initialValues={{ email: "", password: "" }}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="email"
                    keyboardType="email-address"
                    name="email"
                    placeholder="Email"
                    textContentType="emailAddress"
                />

                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="lock"
                    name="password"
                    placeholder="Password"
                    secureTextEntry
                    textContentType="password"
                />

                <SubmitButton title="LOGIN" />
            </AppForm>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    logo: {
        height: '25%',
        width: '30%',
        alignSelf: 'center',
        marginTop: 10
    }
})

export default LoginScreen;