import { useParams } from "react-router-native"
import RepositoryListItem from "../RepoVisualisation/RepositoryListItem"
import useRepository from "../../hooks/useRepository"
import React from "react"
import { Text, View } from "react-native"


export default () => {
    const { repoId } = useParams()
    const { data: singleRepositoryData } = useRepository({repoId:repoId as string})
    console.log({repoId})
    console.log({singleRepositoryData})
    return(
        <View>
        {
            singleRepositoryData ? <RepositoryListItem {...singleRepositoryData.repository}/> : <Text>{`${repoId} data is still loading, please wait`}</Text>
        }
        </View>
    )
}