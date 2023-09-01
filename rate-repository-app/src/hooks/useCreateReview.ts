import { useMutation } from "@apollo/client"
import { CREATE_NEW_REVIEW } from "../graphql/mutations"



export default () => {
    const [mutate,{data,loading,error}] = useMutation(CREATE_NEW_REVIEW)

    return {
        createReview: mutate,
        result: data,
        error: error,
    }
}