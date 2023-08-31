
import { gql } from '@apollo/client';
import { CORE_REPO_FIELDS, REPO_FRAGMENT_WITH_URL_AND_REVIEWS} from './fragments';

export const GET_REPOSITORIES = gql`
  ${CORE_REPO_FIELDS}
  query repositories {
    repositories {
      edges {
        node {
          ...RepositoryCore
        }
      }
    }
  }
`

export const GET_REPOSITORY = gql`
  ${CORE_REPO_FIELDS}
  ${REPO_FRAGMENT_WITH_URL_AND_REVIEWS}
  query repository($id: ID!){
    repository(id:$id){
      ...RepoFragmentWithUrlAndReviews
    }
  }
`



