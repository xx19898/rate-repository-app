import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Main from './src/components/Main';
import { theme } from './theme';
import { NativeRouter } from 'react-router-native';
import createApolloClient from './src/utils/apolloClient';

const apolloClient = createApolloClient()

export default function App() {
  return (
    <>
      <NativeRouter>
        <ApolloProvider client={apolloClient}>
          <SafeAreaView style={styles.container}>
            <Main />
          </SafeAreaView>
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
