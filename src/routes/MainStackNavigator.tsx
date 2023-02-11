import { StyleSheet, View } from 'react-native'
import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack"
import Login from '@myapp/screens/Login';
import Listing from '@myapp/screens/Listing';
import User from '@myapp/screens/User';
import { StackScreens } from './types';

const Stack = createStackNavigator<StackScreens>();


export default function MainStackNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="List" component={Listing} />
                <Stack.Screen name="User" component={User} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({})