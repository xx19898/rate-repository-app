import { useMutation } from "@apollo/client";
import { SIGN_UP } from "../graphql/mutations";


export default () => {
    const [mutate,{ data,loading,error }] = useMutation(SIGN_UP)

    return{
        signUp: mutate,
        result: data,
        error: error,
    }
}