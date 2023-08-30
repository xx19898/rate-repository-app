
import { gql } from '@apollo/client';
import { repoFragment, repoFragmentWithUrl } from './fragments';

export const GET_REPOSITORIES = gql`
  query repositories {
    repositories {
        edges {
          node {
            ${repoFragment}
          }
        }
      }
  }
`



//TODO: write GET_REPOSITORY query


export const GET_REPOSITORY = gql`
  query repository($id: ID!){
    repository(id:$id){
        ${repoFragmentWithUrl}
    }
  }
`



