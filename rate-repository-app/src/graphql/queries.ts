import { gql } from '@apollo/client';
import { repoFragment } from './fragments';

export const GET_REPOSITORIES = gql`
  query {
    repositories {
        edges {
          node {
            ${repoFragment}
          }
        }
      }
  }
`;