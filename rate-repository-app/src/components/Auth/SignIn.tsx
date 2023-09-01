import { Button, Dimensions, GestureResponderEvent, StyleSheet, Text, TextInput, View } from "react-native"
import { theme } from "../../../theme"
import React, { useContext } from 'react';
import { Formik } from "formik";
import * as yup from 'yup';
import CustomText from "../CustomText";
import useSignIn from "../../hooks/useSignIn";
import { useApolloClient, useMutation } from "@apollo/client";
import { AUTHENTICATE } from "../../graphql/mutations";
import AuthStorageContext from "../../contexts/AuthStorageContext";
import { useNavigate } from "react-router-native";
import SignInForm from "./SignInForm";

const styles = StyleSheet.create({
    usernameInput:{
        borderRadius: 5,
        padding:10,
        width:200,
        marginVertical:10,
        backgroundColor: theme.colors.secondary,
        textAlign: 'center'
    },
    passwordInput:{
        borderRadius: 5,
        padding:10,
        width:200,
        marginVertical:10,
        backgroundColor: theme.colors.secondary,
        textAlign: 'center'
    }
})

const validationSchema = yup.object().shape({
    username: yup
        .string()
        .min(4, 'Username should be at least 4 chars long')
        .required('Username is required'),
    password: yup
        .string()
        .min(4, 'Password must be at least 4 chars long')
        .required('Password is required')
})

export default () => {

    var width = Dimensions.get('window').width
    const {signIn,result} = useSignIn()
    const apolloClient = useApolloClient()
    const navigate = useNavigate()
    const authContext = useContext(AuthStorageContext)
    const setLoggedIn = authContext.setLoggedIn
    const authStorage = authContext.authStorage
    return(
        <SignInForm onSignIn={handleSubmit}/>
    )

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
            navigate('/')
        }
    }
}