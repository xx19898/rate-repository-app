import * as yup from 'yup';
import { Button, Dimensions, GestureResponderEvent, StyleSheet, Text, TextInput, View } from "react-native"
import { theme } from "../../../theme"
import React, { useContext } from 'react';
import { Formik } from "formik";
import CustomText from '../CustomText';

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

interface ISignInForm{
    onSignIn: ({username,password}:{username:string,password:string}) => void,
}

export default (params: ISignInForm) => {
    var width = Dimensions.get('window').width

    return(
        <View style={{
            alignItems:'center',
            justifyContent:'center',
            alignContent:'center',
            width:width,
            flex:1}}>
            <CustomText customParams={{fontSize:60}}>Sign In</CustomText>
            <Formik
            validateOnChange={true}
            initialValues={{username:'',password:''}}
            onSubmit={ values => params.onSignIn(values) }
            validationSchema={validationSchema}
            >
                {({ handleChange, handleBlur, handleSubmit, values,errors}) => (
                    <View style={{alignContent:'center',justifyContent:'center',alignItems:'center'}}>
                        <TextInput
                        style={errors.username ? {...styles.usernameInput,borderWidth:2,borderRadius: 5,borderStyle:'solid',borderColor:'red'} : styles.usernameInput}
                        onChangeText={handleChange('username')}
                        onBlur={handleBlur('username')}
                        value={values.username}
                        placeholder="Username"
                        />
                        {
                            errors.username && <CustomText customParams={{borderWidth:2,borderStyle:'solid',borderRadius:5,padding:10,borderColor:'red'}}>
                                {errors.username}
                            </CustomText>
                        }
                        <TextInput
                        style={errors.password ? {...styles.passwordInput,borderWidth:2,borderStyle:'solid',borderRadius:5,borderColor:'red'} : styles.passwordInput}
                        onChangeText={handleChange('password')}
                        textContentType="password"
                        onBlur={handleBlur('password')}
                        value={values.password}
                        placeholder="Password"
                        />
                        {
                            errors.password && <CustomText customParams={{borderWidth:2,borderRadius:5,borderStyle:'solid',padding:20,borderColor:'red'}}>
                                {errors.password}
                            </CustomText>
                        }
                        <Button
                        disabled={!(errors)}
                        testID='SignInButton'
                        onPress={
                            handleSubmit as (values:
                                GestureResponderEvent |
                                React.FormEvent<HTMLFormElement> |
                                undefined) => void
                        } title='Sign In' />
                    </View>
                )}
            </Formik>
        </View>
    )
}