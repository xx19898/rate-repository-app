import React from "react";
import { Button, FlatList, Image, Linking, Pressable, StyleSheet, Text, View } from "react-native";
import { theme } from "../../../theme";
import CustomText from "../CustomText";


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
    url?: string,
}

const repoStyles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        flexDirection: 'column',
        padding:40,
        borderRadius: 10,
        display:'flex',
        alignContent: 'center',
        alignItems: 'center',
    }
})

const githubButton = StyleSheet.create({
    button: {
        width: '100%',
        backgroundColor: theme.colors.primary,
        display:'flex',
        textAlign:'center',
        alignContent:'center',
        alignItems:'center',
        paddingVertical: 20,
        marginTop:20,
        borderRadius: 5
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
    stargazersCount,
    url
}: IRepository) => {


        const otherRowData = [
            {text:'Stars',value:`${Math.round(10 * stargazersCount / 1000) / 10}k`},
            {text:'Forks',value: `${Math.round(10 * forksCount / 1000) / 10}k`},
            {text:'Reviews',value: reviewCount},
            {text:'Rating',value: ratingAverage}
        ]

        return(
            <View testID="repositoryItem" style={repoStyles.container}>
                <View style={{flexDirection:'row'}}>

                <Image
                source={{
                    uri: ownerAvatarUrl,
                }}
                style={{width:50,height:50}}
                />

                <View style={{marginLeft:20,marginBottom:20}}>
                    <Text style={{fontSize:theme.fontSizes.subheading,marginBottom:10}}>{fullName}</Text>
                    <Text style={{color:'grey',fontSize:theme.fontSizes.body,marginBottom:10}}>{description}</Text>
                    <Text style={{
                        color:'white',backgroundColor:theme.colors.primary,marginBottom:10,
                        width:'100%',paddingVertical:10,borderRadius:5,textAlign:'center'
                        }}>{language}</Text>
                </View>
                </View>
                <FlatList
                data={otherRowData}
                horizontal
                contentContainerStyle={{justifyContent:'space-between',width:'100%'}}
                renderItem={({item}) =>
                    <View style={{alignItems:'stretch'}}>
                        <Text style={{fontSize: 20,fontWeight:"600"}}>{item.value}</Text>
                        <Text style={{fontSize: theme.fontSizes.body}}>{item.text}</Text>
                    </View>
                    }
                    >
                </FlatList>
                {
                    url ?
                    <>
                    <Pressable onPress={() => Linking.openURL(url)} style={githubButton.button}>
                        <CustomText customParams={{color:'white',fontSize:20,fontWeight:'bold'}} children={'Open in GitHub'}/>
                    </Pressable>
                    </>
                    :
                    null
                }
            </View>
        )
}