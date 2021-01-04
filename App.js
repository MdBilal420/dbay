// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet, Text, View, SafeAreaView, Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Alert,
  Platform,
  StatusBar,
  Dimensions,
  Button
} from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import WelcomeScreen from './app/screens/WelcomeScreen';
import Card from './app/components/Card';
import ListingDetailScreen from './app/screens/ListingDetailScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import MessageScreen from './app/screens/MessageScreen'
export default function App() {

  return (
    <MessageScreen />
  );
}

