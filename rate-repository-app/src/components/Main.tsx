import Constants from 'expo-constants';
import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { RepositoryList } from './RepoVisualisation/RepositoryList';
import { repositories } from '../repository/repositoryData';
import AppBar from './Navigation/AppBar';

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Text>Rate Repository Application</Text>
      <RepositoryList repositories={repositories} />
    </View>
  );
};

export default Main;