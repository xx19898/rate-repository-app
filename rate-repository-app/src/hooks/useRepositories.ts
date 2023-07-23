import { useQuery } from '@apollo/client';
import { useState, useEffect } from 'react';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {
  const {data: repositories, loading, error, refetch} = useQuery(GET_REPOSITORIES)

  return { repositories, loading, refetch: refetch };
};

export default useRepositories;