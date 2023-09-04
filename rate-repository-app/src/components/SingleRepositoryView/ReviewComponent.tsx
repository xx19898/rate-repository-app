import {View, FlatList, Text, Pressable} from 'react-native'
import React, { useMemo } from 'react'
import RepositoryListItem from '../RepoVisualisation/RepositoryListItem'
import { Review } from '../../types'
import { Maybe } from 'yup'
import { theme } from '../../../theme'
import { format } from 'date-fns'

interface IReview{
    rating:number,
    repositoryName?:string,
    text?: Maybe<string>,
    createdAt: string,
    username: string,
    withActions?: boolean,
    onDelete?: () => void,
    onViewRepository?:() => void,
    repositoryId?: number,
}

export default ({repositoryName,rating,text,createdAt,username,withActions,onDelete,onViewRepository,repositoryId}:IReview) => {

    const formattedDate = useMemo(() => format(new Date(createdAt),'yyyy-MM-dd'),[createdAt])

    return(
        <View style={{backgroundColor:theme.colors.neutral,borderRadius:10,padding:20,marginHorizontal:60,flexDirection:'row',gap:4,justifyContent:'flex-start',alignItems:'flex-start',width:'100%'}}>
            <View style={{ borderRadius: 20, width: 40, height:40,borderWidth: 3, borderStyle: 'solid', borderColor: theme.colors.primary , backgroundColor: theme.colors.neutral, justifyContent: 'center', alignItems: 'center' }}>
                <Text>{rating}</Text>
            </View>
            <View style={{flexDirection:'column',gap: 10, padding:10}}>
                {
                   repositoryName ? <Text style={{fontSize: theme.fontSizes.body,fontWeight: 'bold'}}>{repositoryName}</Text> : null
                }
                <Text style={{fontWeight:'800',fontSize:20}}>{username}</Text>
                <Text style={{color:'grey'}}>{formattedDate}</Text>
            {
            text ? <Text>{text}</Text> : null}
            {
                withActions ?
                <View>
                   <Pressable style={{backgroundColor:'blue',width:100,height:50}} onPress={() => console.log('redirecting to the repository')}>
                        <Text>To repository</Text>
                   </Pressable>
                   <Pressable style={{backgroundColor: 'red',width:100,height:50}} onPress={() => console.log('deleting review')}>
                        <Text>Delete</Text>
                   </Pressable>
                </View>
                : null
            }
            </View>
        </View>
    )
}