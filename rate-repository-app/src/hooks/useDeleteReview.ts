import { useMutation } from "@apollo/client"
import { DELETE_REVIEW } from "../graphql/mutations"


export default () => {
    const [mutate,{data,loading,error}] = useMutation(DELETE_REVIEW)

    return {mutate,data,loading,error}
}