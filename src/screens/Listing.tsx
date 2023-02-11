import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { ListProps } from './types'

export default function Listing({ navigation }: ListProps) {

    const goToUserScreen = () => navigation.navigate("User")

    return (
        <View>
            <Text>Listing</Text>
            <Button title='Go To User' onPress={goToUserScreen} />
        </View>
    )
}

const styles = StyleSheet.create({})