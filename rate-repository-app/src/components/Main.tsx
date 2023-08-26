import Constants from 'expo-constants';
import React, { useMemo } from 'react';
import { Route, Routes, Navigate } from 'react-router-native';
import { Text, StyleSheet, View } from 'react-native';
import { RepositoryList } from './RepoVisualisation/RepositoryList';
import { repositories } from '../repository/repositoryData';
import AppBar from './Navigation/AppBar';
import SignIn from './Auth/SignIn';
import useRepositories from '../hooks/useRepositories';
import { GET_REPOSITORIES } from '../graphql/queries';
import { useQuery } from '@apollo/client';

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  const {repositories} = useRepositories()
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path='/' element={<RepositoryList repositories={repositories} />} />
        <Route path='/signIn' element={<SignIn />}/>
        <Route path='*' element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;