import { View, StyleSheet, FlatList, Pressable, Text } from 'react-native';
import Constants from 'expo-constants';
import React from 'react'
import {useState} from 'react';
import { theme } from '../../../theme';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.secondary,
    height: 60,
    alignContent:'center',
    justifyContent:'center',
    alignItems:'center',
  },
  Text:{
    fontWeight: '600',
    fontSize: theme.fontSizes.subheading
  }
});

const AppBar = () => {
  const [chosenTab,setChosenTab] = useState('Main')

  return <View style={styles.container}>
    <FlatList
    style={{padding:10}}
    contentContainerStyle={{justifyContent: 'center',alignContent:'center',alignItems:'center'}}
    data={[
        {text:'Repositories'},
        {text:'Main'}
    ]}
    horizontal
    ItemSeparatorComponent={() => <View style={{width:20}}/>}
    renderItem={ ({item}) => <AppBarTab
    callback={(text:string) => setChosenTab(text)}
    text={item.text}
    chosenTab={chosenTab}
    />}
    />
  </View>;
};

export default AppBar;