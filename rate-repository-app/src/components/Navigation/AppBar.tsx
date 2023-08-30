import { View, StyleSheet, FlatList, Pressable, Text, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import React from 'react'
import {useState, useEffect, useContext,useRef} from 'react';
import { theme } from '../../../theme';
import AppBarTab from './AppBarTab';
import AuthStorageContext from '../../contexts/AuthStorageContext';

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

  const authContext = useContext(AuthStorageContext)
  const loggedIn = authContext.loggedIn

  return(
  <View style={styles.container}>
    <ScrollView contentContainerStyle={{...styles.scrollView}} horizontal>
      <AppBarTab buttonText='Repositories' chosenTab={chosenTab} redirect='/' setChosen={setChosenTab}/>
      {
        loggedIn ? <AppBarTab buttonText='Sign Out' chosenTab={chosenTab} redirect='/signOut' setChosen={setChosenTab}/>
        :
        <AppBarTab buttonText='Sign In' chosenTab={chosenTab} redirect='/signIn' setChosen={setChosenTab}/>
      }
    </ScrollView>
  </View>);
};

export default AppBar;