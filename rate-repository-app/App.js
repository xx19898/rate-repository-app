import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Main from './src/components/Main';
import { theme } from './theme';
import {useState,useEffect} from 'react'
import { NativeRouter } from 'react-router-native';
import { ApolloProvider } from '@apollo/client';
import createApolloClient from './src/utils/apolloClient';
import AuthStorage from './src/utils/authStorage';
import AuthStorageContext from './src/contexts/AuthStorageContext';
import { TabContext } from './src/contexts/TabContext';
const authStorage = new AuthStorage()
const apolloClient = createApolloClient(authStorage)

export default function App() {
  const [loggedIn,setLoggedIn] = useState(false)
  const [chosenTab,setChosenTab] = useState('Repositories')
  useEffect(() => {
    async function checkIfIsLoggedIn(){
      const isLoggedIn = await authStorage.isLogged()
      setLoggedIn(isLoggedIn)
    }
  },[])
  return (
    <>
      <NativeRouter>
        <ApolloProvider client={apolloClient}>
        <TabContext.Provider value={{chosenTab:chosenTab,setChosenTab:setChosenTab}}>
        <AuthStorageContext.Provider value={{authStorage:authStorage,loggedIn:loggedIn,setLoggedIn:setLoggedIn}}>
          <SafeAreaView style={styles.container}>
            <Main />
          </SafeAreaView>
        </AuthStorageContext.Provider>
        </TabContext.Provider>
        </ApolloProvider>
        </NativeRouter>
      <StatusBar style="auto"/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.neutral,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
