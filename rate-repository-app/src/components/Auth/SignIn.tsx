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
import useSignInAndSaveAccessToken from "../../hooks/useSignInAndSaveAccessToken";

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
    const handleSubmit = useSignInAndSaveAccessToken();

    return(
        <SignInForm onSignIn={handleSubmit}/>
    )
}