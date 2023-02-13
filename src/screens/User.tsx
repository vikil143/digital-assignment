import { StyleSheet, Text, View, Button, TextInput, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'

import {StackScreenProps} from '@react-navigation/stack';
import { StackScreens } from '@myapp/routes/types';
import Spacing from '@myapp/components/Spacing';
import makeApiRequest from '@myapp/services/makeApiRequest';
import { endPoints } from '@myapp/services/endPoints';
import Switch from '@myapp/components/Switch';
import { useToast } from '@myapp/hooks/useToast';
import { Colors } from '@myapp/services/Colors';
import CheckBox from '@myapp/components/CheckBox';
// import { UserProps } from './types'

interface UserProps extends StackScreenProps<StackScreens, "User"> {}

export default function User({ navigation, route }: UserProps) {
    const [inputFields, setInputFields] = useState({
        age: "",
        gender: "",
        company_name: "",
        loader: true
    })
    const { name } = route.params;
    const showToast = useToast();

    useEffect(() => {
        getData();
    },[])

    const getData = async () => {
        try {
            const response = await makeApiRequest("PUT", endPoints.userHasUserName + name, {});
            console.log("resp ",response.data.data)
            const result = response.data.data;
            setInputFields({
                ...inputFields,
                ...result,
                age: result.age,
                company_name: result.company_name,
                gender: result.gender,
                loader: false,
            })
        } catch (error) {
            console.log("Error", error);
        setInputFields({
            ...inputFields,
            loader: false,
        })
        }

    }

    const handleValidate = () => {
        let isValide = true;

        if(inputFields.age === ""){
            showToast("Please enter age", "danger");
            return false
        }


        if(inputFields.company_name === ""){
            showToast("Please enter company name", "danger")
            return false
            
        }

        return isValide;
    }

    const onSubmit = async () => {
        const isValide = handleValidate();

        if(isValide){
            try {
                const jsonData = {
                    ...inputFields,
                }
                const response = await makeApiRequest("PUT", endPoints.userHasUserName + name, jsonData)
                console.log("submit ",response.data)
                navigation.goBack()
            } catch (error) {
                
            }
        }
    };

    const onChangeText = (name: string, value: string) => setInputFields({...inputFields, [name]: value})

    console.log("uer return ", inputFields.gender);

    if(inputFields.loader){
        <View style={[styles.container, styles.center]}>
            <ActivityIndicator color={Colors.success} />
        </View>
    }

    return (
        <View style={[styles.container]}>
            <View>
                <Text>Name</Text>
                <TextInput style={[styles.input]} editable={false} value={name} />
            </View>
            <View>
                <Text>Age</Text>
                <TextInput style={[styles.input]} value={inputFields.age} 
                onChangeText={(text) => onChangeText("age", text)} />
            </View>
            <View>
                <Text>Company Name</Text>
                <TextInput style={[styles.input]}
                value={inputFields.company_name} 
                onChangeText={(text) => onChangeText("company_name", text)}  />
            </View>
            <View>
                <Text>Gender</Text>
                <View style={{ flexDirection: "row",alignItems: "center", marginVertical: 5 }}>
                    <Text>Male :</Text>
                    <CheckBox selected={inputFields.gender === "Male"} onPress={() => setInputFields({
                        ...inputFields,
                        gender: "Male"
                    })} />
                </View>
                <View style={{ flexDirection: "row",alignItems: "center",  marginVertical: 5 }}>
                    <Text>Female :</Text>
                    <CheckBox selected={inputFields.gender === "Female"} onPress={() => setInputFields({
                        ...inputFields,
                        gender: "Female"
                    })} />
                </View>
                {/* <Switch defaultValue={inputFields.gender === "Male"} onValueChange={(isActive) => setInputFields({ ...inputFields, gender: isActive ? "Male" : "Female" })} /> */}
                {/* <TextInput style={[styles.input]} /> */}
                {/* <Text>Selected Value is {inputFields.gender}</Text> */}
            </View>
            <Spacing />
            <Button onPress={onSubmit} title="Go Back" />
        </View>
    )
}

const styles = StyleSheet.create({
    center: {
        justifyContent: "center",
        alignItems: "center",
    },
    input: {
        borderWidth: 1,
        borderColor: "rgba(0, 0, 0, 0.5)",
        padding: 5,
        marginVertical: 5,
    },
    container: {
        flex: 1,
        padding: 15,
    },
})