import Constants from 'expo-constants';
import React, { useMemo, useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-native';
import { Text, StyleSheet, View } from 'react-native';
import { RepositoryList } from './RepoVisualisation/RepositoryList';
import { repositories } from '../repository/repositoryData';
import AppBar from './Navigation/AppBar';
import SignIn from './Auth/SignIn';
import useRepositories, { RepositoryListOrderCriteria, RepositoryListOrderDirection } from '../hooks/useRepositories';
import { GET_REPOSITORIES } from '../graphql/queries';
import { useQuery } from '@apollo/client';
import SignOut from './Auth/SignOut';
import SingleRepositoryPage from './SingleRepositoryView/SingleRepo';
import ReviewCreation from './ReviewCreation/ReviewCreation';
import SignUp from './Auth/SignUp';
import MyReviews from './MyReviews/MyReviews';

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {

  const [orderCriteria, setOrderCriteria] = useState<RepositoryListOrderCriteria>('CREATED_AT')
  const [orderDirection,setOrderDirection] = useState<RepositoryListOrderDirection>('DESC')
  const [searchKeyword,setSearchKeyword] = useState<string>('')
  const {repositories} = useRepositories({criteria:orderCriteria,order:orderDirection,searchKeyword:searchKeyword})

  return(
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path='/'
        element={<RepositoryList
        setOrderCriteria={setOrderCriteria}
        currentOrderCriteria={orderCriteria}
        setOrderDirection={setOrderDirection}
        currentOrderDirection={orderDirection}
        setKeyword={setSearchKeyword}
        repositories={repositories}
        searchKeyword={searchKeyword}
        />} />
        <Route path='/repository/:repoId' element={<SingleRepositoryPage />} />
        <Route path='/signIn' element={<SignIn />}/>
        <Route path='/signOut' element={<SignOut />} />
        <Route path='/signUp' element={<SignUp />} />
        <Route path='/createReview' element={<ReviewCreation />} />
        <Route path='/myReviews' element={<MyReviews />} />
        <Route path='*' element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;