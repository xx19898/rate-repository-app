import { gql } from "@apollo/client";

export const AUTHENTICATE = gql `
mutation Authenticate($credentials: AuthenticateInput!){
    authenticate(credentials:$credentials){
        accessToken
        expiresAt
        user{
            username
        }
    }
}
`

export const CREATE_NEW_REVIEW = gql`
mutation createReview($review: CreateReviewInput){
    createReview(review: $review){
        repositoryId
    }
}`

export const SIGN_UP = gql`
mutation createUser($user: CreateUserInput){
    createUser(user: $user){
        username
    }
}`

