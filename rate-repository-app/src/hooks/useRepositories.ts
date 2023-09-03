import { useQuery } from '@apollo/client';
import { useState, useEffect, useMemo } from 'react';
import { GET_REPOSITORIES } from '../graphql/queries';
import { CORE_REPO_FIELDS } from '../graphql/fragments';

export type RepositoryListOrderCriteria = 'CREATED_AT' | 'RATING_AVERAGE'
export type RepositoryListOrderDirection = 'ASC' | 'DESC'

interface UseRepositories {
  criteria: RepositoryListOrderCriteria,
  order: RepositoryListOrderDirection
}

const useRepositories = (params: UseRepositories) => {
  const {data, loading, error, refetch} = useQuery(GET_REPOSITORIES)
  console.log({data})
  useEffect(() => {
    refetch({orderDirection:params.order,orderBy: params.criteria})
  },[params.criteria,params.order])
  const repositories = useMemo(() => {
    if(data) return data.repositories.edges.map((edge) => edge['node'])
    else{
  return [params.criteria,params.order,data]
}
  },[data])
  return { repositories, loading, refetch: refetch }
}

export default useRepositories