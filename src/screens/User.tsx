import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { UserProps } from './types'

export default function User({ navigation }: UserProps) {

    const goBack = () => navigation.goBack()

    return (
        <View>
            <Text>User</Text>
            <Button onPress={goBack} title="Go Back" />
        </View>
    )
}

const styles = StyleSheet.create({})