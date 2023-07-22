import { View, StyleSheet, FlatList, Pressable, Text, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import React from 'react'
import {useState} from 'react';
import { theme } from '../../../theme';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.neutral,
    height: 30,
    paddingTop: 0,
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
  const [chosenTab,setChosenTab] = useState('Repositories')

  return <View style={styles.container}>
    <ScrollView style={{flexDirection:'row'}} horizontal>
      <AppBarTab buttonText='Repositories' chosenTab={chosenTab} redirect='/' setChosen={setChosenTab}/>
      <AppBarTab buttonText='Sign In' chosenTab={chosenTab} redirect='/signIn' setChosen={setChosenTab}/>
    </ScrollView>
  </View>;
};

export default AppBar;