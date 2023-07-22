import { FlatList, StyleSheet, Text, View } from "react-native";
import { IRepository } from "../../repository/types";
import React from "react";
import { theme } from "../../../theme";
import RepositoryListItem from "./RepositoryListItem";

const styles = StyleSheet.create({

    separator: {
        height: 20,
    }
})



const ItemSeparator = () => <View style={styles.separator} />


const RepositoryList = ({repositories}:{repositories:IRepository[]}) => {
    return(
        <FlatList
        data={repositories}
        ItemSeparatorComponent={ItemSeparator}
        key='xd'
        renderItem={({item}) => <RepositoryListItem {...item}/>}
        />
    )
}

export {RepositoryList}