import { Pressable, StyleSheet, Text } from "react-native"
import React from 'react'

interface AppBarTab{
    text: string,
    callback: (text:string) => void,
    chosenTab: string,
}

export default ({callback,text,chosenTab}:AppBarTab) => {


    return(
        <Pressable onPress={() => callback(text)}>
            <Text style={{textDecorationLine: chosenTab === text ? 'underline' : 'none',textDecorationColor:'black'}}>
                {text}
            </Text>
        </Pressable>
    )
}