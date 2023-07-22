import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Main from './src/components/Main';
import { theme } from './theme';
import { NativeRouter } from 'react-router-native';

export default function App() {
  return (
    <>
      <NativeRouter>
      <SafeAreaView style={styles.container}>
      <Main />
      </SafeAreaView>
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
