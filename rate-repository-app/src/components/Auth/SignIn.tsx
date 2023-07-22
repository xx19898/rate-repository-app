import { Button, Dimensions, GestureResponderEvent, StyleSheet, Text, TextInput, View } from "react-native"
import { theme } from "../../../theme"
import React from 'react';
import { Formik } from "formik";
import * as yup from 'yup';

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

    var width = Dimensions.get('window').width; //full width

    return(
        <View style={{
            alignItems:'center',
            justifyContent:'center',
            alignContent:'center',
            width:width,
            flex:1}}>
            <Text style={{fontSize:theme.fontSizes.heading}}>Sign In</Text>
            <Formik
            validateOnChange={true}
            initialValues={{username:'',password:''}}
            onSubmit={values => console.log({values})}
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
                            errors.username && <Text style={{borderWidth:2,borderStyle:'solid',borderRadius:5,padding:10,borderColor:'red'}}>
                                {errors.username}
                            </Text>
                        }
                        <TextInput
                        style={errors.password ? {...styles.passwordInput,borderWidth:2,borderStyle:'solid',borderRadius:5,borderColor:'red'} : styles.passwordInput}
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                        placeholder="Password"
                        />
                        {
                            errors.password && <Text style={{borderWidth:2,borderRadius:5,borderStyle:'solid',padding:20,borderColor:'red'}}>
                                {errors.password}
                            </Text>
                        }
                        <Button disabled={!(errors)} onPress={
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