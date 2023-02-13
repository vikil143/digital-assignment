import { StyleSheet, Text, View, Button, FlatList, TouchableWithoutFeedback } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Data, ListProps } from './types'
import makeApiRequest from '@myapp/services/makeApiRequest';
import { endPoints } from '@myapp/services/endPoints';
import { Colors } from '@myapp/services/Colors';


export default function Listing({ navigation }: ListProps) {
    const [data, setData] = useState<Data[]>([]);
    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        try {        
            const response = await makeApiRequest("GET", endPoints.list, {});
            setData(response.data.data)
            // console.log("list data", response.data.data)
        } catch (error) {
            
        }
    }

    const goToUserScreen = (item: Data) => navigation.navigate("User",{ ...item })

    console.log("list render", data[0])

    return (
        <View style={[styles.container]}>
            <FlatList 
                data={data}
                renderItem={({ item, index }) => {
                    // As you told me their is only one data which "name" in the listing 
                    return (
                        <TouchableWithoutFeedback onPress={() => goToUserScreen(item)}>
                            <View style={[styles.card]}>
                                <Text>{item.name}</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        padding: 15,
        backgroundColor: Colors.white,
        margin: 5,
    },
    container: {
        flex: 1,
    },
})