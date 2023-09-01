import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { IRepository } from "../../repository/types";
import React from "react";
import { theme } from "../../../theme";
import RepositoryListItem from "./RepositoryListItem";
import { useNavigate } from "react-router-native";

const styles = StyleSheet.create({

    separator: {
        height: 20,
    }
})



const ItemSeparator = () => <View style={styles.separator} />


const RepositoryList = ({repositories}:{repositories:IRepository[]}) => {
    const navigate = useNavigate()

    return(
        <FlatList
        data={repositories}
        ItemSeparatorComponent={ItemSeparator}
        key='xd'
        renderItem={({item}) => <Pressable onPress={() => navigate(`/repository/${item.id}`)}><RepositoryListItem {...item} url={undefined} /></Pressable>}
        />
    )
}

export {RepositoryList}