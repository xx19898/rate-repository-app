import { FlatList, StyleSheet, View } from "react-native";
import { Repository } from "../repository/types";
import React from "react";

const styles = StyleSheet.create({
    separator: {
        height: 10
    }
})

const ItemSeparator = () => <View style={styles.separator} />

const RepositoryList = ({repositories}:{repositories:Repository[]}) => {
    return(
        <FlatList
        data={repositories}
        ItemSeparatorComponent={ItemSeparator}
        //TODO: implement the render function, render out the single entries to repositories
        renderItem={}
        />
    )
}