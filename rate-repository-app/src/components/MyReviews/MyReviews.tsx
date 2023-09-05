import { FlatList, Text, View } from "react-native"
import React, { useMemo } from 'react'
import ReviewComponent from "../SingleRepositoryView/ReviewComponent"
import useUserReviews from "../../hooks/useUserReviews"
import { theme } from "../../../theme"
import useDeleteReview from "../../hooks/useDeleteReview"

export default () => {
    const { data,error,refetch } = useUserReviews()
    const {mutate:deleteReview} = useDeleteReview()

    const parsedData = useMemo(() => {
        if(data) return data.me.reviews.edges.map( edge => edge.node)
        return []
    },[data])
    console.log({error})
    console.log({repo:parsedData[0]})

    return(
        <View style={{backgroundColor:theme.colors.secondary, alignItems:'center'}}>
            <Text style={{fontSize:theme.fontSizes.heading,fontWeight: 'bold'}}>My Reviews</Text>
            <FlatList
            style={{marginHorizontal:10}}
            data={parsedData}
            ItemSeparatorComponent={() => <View style={{height:30}}></View>}
            ListHeaderComponent={() => <View style={{height:20}}></View>}
            ListFooterComponent={() => <View style={{height:100}}></View>}
            renderItem={ ({item}) => <ReviewComponent reviewId={ item.id } deleteReview={onDeleteReview} refetchReviews={refetch} repositoryName={item.repository.fullName} repositoryId={item.repository.id}  createdAt={item.createdAt} text={item.text} rating={item.rating} username={item.username} withActions />}
            />
        </View>
    )

    async function onDeleteReview(repositoryId: string){
        await deleteReview({variables:{deleteReviewId:repositoryId}})
    }
}