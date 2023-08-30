
import { GET_REPOSITORY } from "../graphql/queries"
import { useQuery } from "@apollo/client"

const useRepository = ({ repoId } : { repoId: string }) => {
    const { data, loading, error, refetch } = useQuery( GET_REPOSITORY,{variables:{id:repoId}})
    console.log({data,loading,error})
    return { data,loading,error,refetch }
}

export default useRepository;