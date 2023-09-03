import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import {Picker} from '@react-native-picker/picker';
import { IRepository } from "../../repository/types";
import React from "react";
import { theme } from "../../../theme";
import RepositoryListItem from "./RepositoryListItem";
import { useNavigate } from "react-router-native";
import { RepositoryListOrderCriteria, RepositoryListOrderDirection } from "../../hooks/useRepositories";

const styles = StyleSheet.create({

    separator: {
        height: 20,
    }
})



const ItemSeparator = () => <View style={styles.separator} />


const RepositoryList = ({
    repositories,
    currentOrderCriteria,
    currentOrderDirection,
    setOrderCriteria,
    setOrderDirection
}:{
    repositories: IRepository[],
    currentOrderCriteria: RepositoryListOrderCriteria,
    currentOrderDirection: RepositoryListOrderDirection,
    setOrderCriteria: (newOrderCriteria:RepositoryListOrderCriteria) => void,
    setOrderDirection: (newOrderDirection: RepositoryListOrderDirection) => void}) => {

    const navigate = useNavigate()

    return(
        <>
        <View style={{height:50,flexDirection:'row',padding:10,margin:10,justifyContent:'space-between',alignItems:'center'}}>
        <Picker
        selectedValue={currentOrderCriteria}
        style={{width:150,backgroundColor:theme.colors.primary}}
        onValueChange={(itemValue) => setOrderCriteria(itemValue)}>
            <Picker.Item label="Creation Date" value='CREATED_AT' />
            <Picker.Item label="Rating Average" value='RATING_AVERAGE' />
        </Picker>
        <Picker
        selectedValue={currentOrderDirection}
        style={{width:150,backgroundColor:theme.colors.primary}}
        onValueChange={ (itemValue) => setOrderDirection(itemValue) }>
            <Picker.Item label="ASC" value='ASC' />
            <Picker.Item label="DESC" value='DESC' />
        </Picker>
        </View>
        <FlatList
        data={repositories}
        ItemSeparatorComponent={ItemSeparator}
        key='xd'
        renderItem={({item}) => <Pressable onPress={() => navigate(`/repository/${item.id}`)}><RepositoryListItem {...item} url={undefined} /></Pressable>}
        />
        </>
    )
}

export {RepositoryList}