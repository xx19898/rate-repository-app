import { useParams } from "react-router-native"
import RepositoryListItem from "../RepoVisualisation/RepositoryListItem"
import useRepository from "../../hooks/useRepository"
import React,{useMemo} from "react"
import { Text,SafeAreaView, FlatList } from "react-native"


export default () => {

    const { repoId } = useParams()
    const { data: singleRepositoryData } = useRepository({repoId:repoId as string})
    const reviewData = useMemo(() => {
        if(singleRepositoryData === undefined) return []
        console.log({reviews:singleRepositoryData.repository.reviews})
        const reviews = singleRepositoryData.repository.reviews.edges.map((reviewEdge) => reviewEdge.node)
        return reviews
    },[singleRepositoryData])
    console.log({reviewData})

    return(
        <SafeAreaView>
        {
            singleRepositoryData ?
            <>
            <RepositoryListItem {...singleRepositoryData.repository}/>
            </>
            :
            <Text>{`${repoId} data is still loading, please wait`}</Text>
        }

        </SafeAreaView>
    )
}