import { View, StyleSheet, FlatList, Pressable, Text, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import React from 'react'
import {useState} from 'react';
import { theme } from '../../../theme';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.altSecondary,
    height:60,
    alignContent:'center',
    justifyContent:'center',
    alignItems:'center',
  },
  Text:{
    fontWeight: '600',
    fontSize: theme.fontSizes.subheading
  },
  scrollView:{
    alignContent:'center',
    justifyContent:'center',
    alignItems:'center'
  }
});

const AppBar = () => {
  const [chosenTab,setChosenTab] = useState('Repositories')

  return <View style={styles.container}>
    <ScrollView contentContainerStyle={{...styles.scrollView}} horizontal>
      <AppBarTab buttonText='Repositories' chosenTab={chosenTab} redirect='/' setChosen={setChosenTab}/>
      <AppBarTab buttonText='Sign In' chosenTab={chosenTab} redirect='/signIn' setChosen={setChosenTab}/>
    </ScrollView>
  </View>;
};

export default AppBar;