import { Pressable, StyleSheet, Text } from "react-native"
import React from 'react'
import {useNavigate} from 'react-router-native'



interface AppBarTab{
    buttonText: string,
    redirect: string,
    chosenTab: string,
    setChosen: (text:string) => void,
}

export default ({redirect,buttonText,chosenTab,setChosen}:AppBarTab) => {
    const navigate = useNavigate()

    return(
        <Pressable onPress={() => {
            navigate(redirect)
            setChosen(buttonText)
            }} style={{marginHorizontal:10}}>
            <Text style={{
                textDecorationLine: chosenTab === buttonText ? 'underline' : 'none',
                textDecorationColor:'black',

                }}>
                {buttonText}
            </Text>
        </Pressable>
    )
}