import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { theme } from "../../../theme";


export type IRepository = {
    id: string,
    fullName: string,
    description: string,
    language: string,
    forksCount: number,
    stargazersCount: number,
    ratingAverage: number,
    reviewCount: number,
    ownerAvatarUrl: string,
}

const repoStyles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        flexDirection: 'column',
        padding:40,
        borderRadius: 10,
        alignContent: 'flex-start',
        alignItems: 'flex-start',
    }
})





export default ({
    description,
    forksCount,
    fullName,
    id,
    language,
    ownerAvatarUrl,
    ratingAverage,
    reviewCount,
    stargazersCount}: IRepository) => {

        const otherRowData = [
            {text:'Stars',value:`${Math.round(10 * stargazersCount / 1000) / 10}k`},
            {text:'Forks',value: `${Math.round(10 * forksCount / 1000) / 10}k`},
            {text:'Reviews',value: reviewCount},
            {text:'Rating',value: ratingAverage}
        ]

        return(
            <View style={repoStyles.container}>
                <Image
                source={{
                    uri: ownerAvatarUrl
                }}
                style={{width:50,height:50,marginBottom:20}}
                />
                <View>

            </View>
                <FlatList data={otherRowData}
                    style={{flexDirection:'row',justifyContent:'space-between',alignContent:'center'}}
                    ItemSeparatorComponent={() => <View style={{width:100}}/>}
                    renderItem={({item}) =>
                    <View style={{alignItems:'stretch'}}>
                        <Text style={{fontSize: 20,fontWeight:"600"}}>{item.value}</Text>
                        <Text style={{fontSize: theme.fontSizes.body}}>{item.text}</Text>
                    </View>
                    }
                    >
                </FlatList>
            </View>
        )
}