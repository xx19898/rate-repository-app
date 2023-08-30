import { useQuery } from '@apollo/client';
import { useState, useEffect, useMemo } from 'react';
import { GET_REPOSITORIES } from '../graphql/queries';
import { repoFragment } from '../graphql/fragments';



const useRepositories = () => {
  const {data, loading, error, refetch} = useQuery(GET_REPOSITORIES)
  console.log({data})
  const repositories = useMemo(() => {
    if(data) return data.repositories.edges.map((edge) => edge['node'])
    else{
  return []
}
  },[data])
  return { repositories, loading, refetch: refetch };
};

export default useRepositories;