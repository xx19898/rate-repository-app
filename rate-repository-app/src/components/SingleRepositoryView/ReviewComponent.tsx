import {View, FlatList, Text} from 'react-native'
import React, { useMemo } from 'react'
import RepositoryListItem from '../RepoVisualisation/RepositoryListItem'
import { Review } from '../../types'
import { Maybe } from 'yup'
import { theme } from '../../../theme'
import { format } from 'date-fns'

interface IReview{
    rating:number,
    text?: Maybe<string>,
    createdAt: string,
    username: string,
}

export default ({rating,text,createdAt,username}:IReview) => {
    const formattedDate = useMemo(() => format(new Date(createdAt),'yyyy-MM-dd'),[createdAt])
    return(
        <View style={{backgroundColor:theme.colors.neutral,borderRadius:10,padding:20,flexDirection:'row',gap:4,justifyContent:'flex-start',alignItems:'flex-start',paddingRight:40}}>
            <View style={{ borderRadius: 20, width: 40, height:40,borderWidth: 3, borderStyle: 'solid', borderColor: theme.colors.primary , backgroundColor: theme.colors.neutral, justifyContent: 'center', alignItems: 'center' }}>
                <Text>{rating}</Text>
            </View>
            <View style={{flexDirection:'column',gap: 10, padding:10}}>
                <Text style={{fontWeight:'800',fontSize:20}}>{username}</Text>
                <Text style={{color:'grey'}}>{formattedDate}</Text>
            {text ? <Text>{text}</Text> : null}
            </View>
        </View>
    )
}