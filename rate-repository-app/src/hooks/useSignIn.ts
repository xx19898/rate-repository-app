import { useMutation } from "@apollo/client";
import { AUTHENTICATE } from "../graphql/mutations";


export default () => {
    const [mutate,{data,loading,error}] = useMutation(AUTHENTICATE)

    return {
        signIn:mutate,
        result: data,
        error: error,
    }
}