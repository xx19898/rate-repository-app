import { useNavigate } from "react-router-native"
import useSignIn from "./useSignIn"
import AuthStorageContext from "../contexts/AuthStorageContext"
import { useContext } from "react"
import { ApolloClient, useApolloClient } from "@apollo/client"
import { TabContext } from "../contexts/TabContext"

export default () => {
    const {signIn, result} = useSignIn()
    const navigate = useNavigate()
    const apolloClient = useApolloClient()
    const authContext = useContext(AuthStorageContext)
    const setLoggedIn = authContext.setLoggedIn
    const authStorage = authContext.authStorage
    const tabContext = useContext(TabContext)
    const setChosenTab = tabContext.setChosenTab

    return handleSubmit

    async function handleSubmit ({username,password}:{username:string,password:string}){
        const {data,errors} = await signIn({variables:{credentials:{username,password}}})
        if(!errors && data.authenticate.accessToken){
            await authStorage.setAccessToken(data.authenticate.accessToken)
            await authStorage.setExpirationDate(data.authenticate.expiresAt)
            await authStorage.setLoggedUser(data.authenticate.user.username)
            const accessToken = await authStorage.getLoggedUser()
            const expDate = await authStorage.getExpirationDate()
            const loggedUser = await authStorage.getLoggedUser()
            apolloClient.resetStore()
            setLoggedIn(true)
            setChosenTab('Repositories')
            navigate('/')
        }
    }
}