import { useContext } from "react"
import AuthStorageContext from "../../contexts/AuthStorageContext"
import { Button, Text, View } from "react-native"
import React, {useEffect,useRef,useState} from "react"
import { useNavigate } from "react-router-native"


export default () => {
    const [loggedUsername,setLoggedUsername] = useState('')
    const authContext = useContext(AuthStorageContext)
    const authStorage = authContext.authStorage
    const navigate = useNavigate()

    useEffect(() => {
        const getLoggedUsername = async () => {
            const username = await authStorage.getLoggedUser()
            setLoggedUsername(username)
        }
        getLoggedUsername()
    },[])

    return(
        <View>
            <Text>{`You are currently logged in as ${loggedUsername}`}</Text>
            <Button onPress={signOut} title='Sign Out'/>
        </View>
    )

    async function signOut(){
        await authStorage.clearStorage()
        authContext.setLoggedIn(false)
        navigate('/')
    }
}