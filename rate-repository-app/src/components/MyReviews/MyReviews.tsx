import { FlatList, Text, View } from "react-native"
import React, { useMemo } from 'react'
import ReviewComponent from "../SingleRepositoryView/ReviewComponent"
import useUserReviews from "../../hooks/useUserReviews"
import { theme } from "../../../theme"

export default () => {
    const { data,error,refetch } = useUserReviews()
    const parsedData = useMemo(() => {
        if(data) return data.me.reviews.edges.map( edge => edge.node)
        return []
    },[data])
    console.log({error})
    console.log({parsedData})

    return(
        <View style={{backgroundColor:theme.colors.secondary,justifyContent:'center',alignItems: 'center'}}>
            <Text style={{fontSize:theme.fontSizes.heading,fontWeight: 'bold'}}>My Reviews</Text>
            <FlatList
            style={{marginHorizontal:10}}
            data={parsedData}
            ItemSeparatorComponent={() => <View style={{height:30}}></View>}
            renderItem={ ({item}) => <ReviewComponent repositoryName={item.repository.fullName}  createdAt={item.createdAt} text={item.text} rating={item.rating} username={item.username} withActions /> }
            />
        </View>
    )
}