import {View, FlatList, Text, Pressable} from 'react-native'
import React, { useMemo } from 'react'
import RepositoryListItem from '../RepoVisualisation/RepositoryListItem'
import { Review } from '../../types'
import { Maybe } from 'yup'
import { theme } from '../../../theme'
import { format } from 'date-fns'
import useCustomNavigate from '../../hooks/useCustomNavigate'
import { Alert } from 'react-native'
import { MutationOptions } from '@apollo/client'

interface IReview{
    rating:number,
    reviewId?: string,
    repositoryName?:string,
    text?: Maybe<string>,
    createdAt: string,
    username: string,
    withActions?: boolean,
    onDelete?: () => void,
    onViewRepository?:() => void,
    repositoryId?: string,
    refetchReviews?: () => Promise<any>,
    deleteReview?: (reviewId: string) => Promise<void>,
}

export default ({
    reviewId,
    refetchReviews,
    deleteReview,
    repositoryName,
    rating,
    text,
    createdAt,
    username,
    withActions,
    onDelete,
    onViewRepository,
    repositoryId }:IReview) => {

    const {customNavigate} = useCustomNavigate()
    const formattedDate = useMemo(() => format(new Date(createdAt),'yyyy-MM-dd'),[createdAt])

    return(
        <View style={{backgroundColor:theme.colors.neutral,borderRadius:10,marginHorizontal:30,flexDirection:'row',
        gap:10,justifyContent:'center',alignItems:'flex-start',padding:40}}>
            <View style={{borderRadius: 20, width: 40, height:40,borderWidth: 3, borderStyle: 'solid', borderColor: theme.colors.primary , backgroundColor: theme.colors.neutral, justifyContent: 'center', alignItems: 'center' }}>
                <Text>{rating}</Text>
            </View>
            <View style={{flexDirection:'column',gap: 10,padding:5}}>
                {
                   repositoryName ? <Text style={{fontSize: theme.fontSizes.body,fontWeight: 'bold'}}>{repositoryName}</Text> : null
                }
                <Text style={{fontWeight:'800',fontSize:20}}>{username}</Text>
                <Text style={{color:'grey'}}>{formattedDate}</Text>
            {
            text ? <Text>{text}</Text> : null}
            {
                withActions ?
                <View style={{flexDirection:'row', alignContent:'center', justifyContent:'space-between'}}>
                   <Pressable style={{display:'flex', flexDirection:'column', backgroundColor:'blue', borderRadius:10, width:100, height:50 ,alignItems:'center', justifyContent: 'center'}} onPress={() => customNavigate(`/repository/${repositoryId}`,'Repositories')}>
                        <Text style={{fontWeight:'bold',fontSize:theme.fontSizes.body}}>To repository</Text>
                   </Pressable>
                   <Pressable style={{ backgroundColor: 'red', width:100, height:50, borderRadius:10 ,alignItems:'center', justifyContent: 'center'}} onPress={() => {
                    if(repositoryId) handleClickDelete(repositoryId)}}>
                        <Text style={{fontWeight:'bold',fontSize:theme.fontSizes.body}}>Delete</Text>
                   </Pressable>
                </View>
                :
                null
            }
            </View>
        </View>
    )

        function handleClickDelete(repositoryId:string){
            Alert.alert(
                'Review deletion alert',
                'Are you sure you\'d like to delete this review?',
                [
                {
                    text: 'No',
                    onPress: () => Alert.alert('Cancel Pressed'),
                    style: 'cancel',
                },
                {
                    text: 'Yes',
                    onPress: async () => {
                        console.log({deleteReview,refetchReviews,reviewId})
                        if(deleteReview && refetchReviews && reviewId){
                            console.log('DELETING REVIEW')
                            await deleteReview(reviewId)
                            await refetchReviews()
                        }
                    },
                    style: 'default',
                },
                ],
                {
                cancelable: true,

                },
                    )
                }
}