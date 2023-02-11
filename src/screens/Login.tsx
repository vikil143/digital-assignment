import { StyleSheet, Text, View, Button, TextInput } from 'react-native'
import React, { useState } from 'react'
import { LoginProps } from './types'
import Spacing from '@myapp/components/Spacing'

export default function Login({ navigation }: LoginProps) {
    const [state, setState] = useState({
        email: "",
        password: "",
    })

    const [passwordSecure, setPasswordSecure] = useState(false);



    const onSubmit = () => navigation.navigate("List");

    const onChangeText = (name: string, value: string) => setState({ ...state, [name]: value })

    return (
        <View style={[styles.container]}>
            <View>
                <TextInput style={[styles.input]}
                    placeholder="Email ID"
                    onChangeText={(text) => onChangeText("email", text)} />
                <Spacing size={5} />
                <TextInput style={[styles.input]}
                    placeholder="Password"
                    onChangeText={(text) => onChangeText("password", text)}
                    secureTextEntry={passwordSecure}
                />
                <Spacing />
                <Button title='Login' onPress={onSubmit} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: "rgba(0, 0, 0, 0.5)",
        padding: 5,
    },
    container: {
        padding: 10,
        flex: 1,
        justifyContent: "center"
    },
})