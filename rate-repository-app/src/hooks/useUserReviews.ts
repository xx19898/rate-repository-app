import { useQuery } from "@apollo/client"
import { OWN_REVIEWS } from "../graphql/queries"


export default () => {
    const {data,refetch,error} = useQuery(OWN_REVIEWS)

    return {data,refetch,error}
}