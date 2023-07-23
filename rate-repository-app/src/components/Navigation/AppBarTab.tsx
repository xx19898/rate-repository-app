import { Pressable, StyleSheet, Text, View } from "react-native"
import React from 'react'
import {useNavigate} from 'react-router-native'
import CustomText from "../CustomText"
import { theme } from "../../../theme"



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
            {
                chosenTab === buttonText ?
                <View style={{borderBottomWidth: 2,borderBottomColor:'black'}}>
                    <CustomText customParams={{
                        fontSize: theme.fontSizes.subheading,
                        paddingBottom:4,
                        }}>
                        {buttonText}
                    </CustomText>
                </View>
                :
                <CustomText customParams={{
                    fontSize: theme.fontSizes.subheading,
                    }}>
                    {buttonText}
                </CustomText>
            }
        </Pressable>
    )
}