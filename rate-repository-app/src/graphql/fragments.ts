import { gql } from "@apollo/client/";

export const CORE_REPO_FIELDS = gql`fragment RepositoryCore on Repository{
    id
    fullName
    description
    language
    forksCount
    stargazersCount
    ratingAverage
    reviewCount
    ownerAvatarUrl
    url}`

export const REPO_FRAGMENT_WITH_URL_AND_REVIEWS = gql`
${CORE_REPO_FIELDS}
fragment RepoFragmentWithUrlAndReviews on Repository{
    ...RepositoryCore
    reviews {
      edges {
        node {
          id
          text
          rating
          createdAt
          user{
            id
            username
          }
        }
      }
    }
  }`

