// import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet, Text, View, SafeAreaView, Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Alert,
  Platform,
  StatusBar,
  Dimensions,
  Button,
  TextInput,
  Switch
} from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import WelcomeScreen from './app/screens/WelcomeScreen';
import Card from './app/components/Card';
import ListingDetailScreen from './app/screens/ListingDetailScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import MessageScreen from './app/screens/MessageScreen'
import Screen from './app/components/Screen';
import Icon from './app/components/Icon'
import colors from './app/config/colors';
import ListItemDeleteAction from './app/components/ListItemDeleteAction';
import ListItem from './app/components/ListItem';
import AccountScreen from './app/screens/AccountScreen'
import ListingsScreen from './app/screens/ListingsScreen'
import ListingEditScreen from './app/screens/ListingEditScreen'
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker'
import LoginScreen from './app/screens/LoginScreen';
import AppFormField from './app/components/forms/AppFormField';


export default function App() {

  return (
    <ListingEditScreen />
  );
}

