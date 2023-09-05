import { useParams } from "react-router-native"
import RepositoryListItem from "../RepoVisualisation/RepositoryListItem"
import useRepository from "../../hooks/useRepository"
import React,{useMemo} from "react"
import { Text,SafeAreaView, FlatList, View } from "react-native"
import { Review } from "../../gql/graphql"
import ReviewComponent from "./ReviewComponent"
import { theme } from "../../../theme"


export default () => {
    console.log('GOT HERE')
    const { repoId } = useParams()
    const { data: singleRepositoryData } = useRepository({repoId:repoId as string})
    const reviewData:Review[] = useMemo(() => {
        if(singleRepositoryData === undefined) return []
        const reviews = singleRepositoryData.repository.reviews.edges.map((reviewEdge) => reviewEdge.node)
        return reviews
    },[singleRepositoryData])

    return(
        <SafeAreaView style={{flex:1}}>
        {
            singleRepositoryData ?
            <>
            <RepositoryListItem {...singleRepositoryData.repository}/>
            <FlatList
            style={{backgroundColor: theme.colors.altSecondary,paddingVertical:40,paddingHorizontal:5}}
            data={reviewData}
            ItemSeparatorComponent={() => <View style={{height:20}} />}
            ListFooterComponent={<View style={{height:100}} />}
            renderItem={( {item} ) => <ReviewComponent rating={item.rating} text={item.text} createdAt={item.createdAt} username={ item.user.username } />} />
            </>
            :
            <Text>{`${repoId} data is still loading, please wait`}</Text>
        }

        </SafeAreaView>
    )
}