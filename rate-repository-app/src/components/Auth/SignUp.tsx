import {View,TextInput,StyleSheet,Button,ScrollView} from 'react-native'
import React, { useEffect, useState } from 'react'
import * as yup from 'yup'
import { useNavigate } from 'react-router-native'
import { theme } from '../../../theme'
import CustomText from '../CustomText'
import { Formik } from 'formik'
import useSignUp from '../../hooks/useSignUp'
import useSignIn from '../../hooks/useSignIn'
import useCustomNavigate from '../../hooks/useCustomNavigate'
import useSignInAndSaveAccessToken from '../../hooks/useSignInAndSaveAccessToken'

const styles = StyleSheet.create({
    mainContainer:{
            backgroundColor: theme.colors.neutral,
            alignItems:'center',
            justifyContent:'center',
            flexDirection: 'column',
            display:'flex',
            gap: 20,
            height:'100%',
            flex:1,

    },
    subContainer:{
        alignItems:'center',
        justifyContent:'center',
        flexDirection: 'column',
    },
    textInput:{
        borderRadius: 5,
        padding:10,
        width:200,
        marginVertical:10,
        backgroundColor: theme.colors.secondary,
        textAlign: 'center'
    },
})



const validationSchema = yup.object().shape({
    username: yup
        .string()
        .min(4, 'Username should be at least 4 chars long')
        .required('Username is required'),
    password: yup
        .string()
        .min(4, 'Password must be at least 4 chars long')
        .required('Password is required'),
    passwordConfirmation: yup
        .string()
        .oneOf([yup.ref('password')],'Password confirmation does not match the entered password')
        .required('Password confirmation is required')
})

export default () => {

    const {signUp,error,result} = useSignUp()
    const signInAndRedirect = useSignInAndSaveAccessToken()

    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')

    useEffect(() => {
        if(result){
            signInAndRedirect({
                username:username,
                password:password
            })
        }
    },[result])

    return(
        <View style={styles.mainContainer}>
            <CustomText customParams={{fontSize:theme.fontSizes.heading}}>Sign Up</CustomText>
            <Formik
            validateOnChange={true}
            initialValues={{username:'',password:'',passwordConfirmation: ''}}
            onSubmit={ values => {

                setUsername(values.username)
                setPassword(values.password)

                signUp({variables:{
                user:{
                    username:values.username,
                    password:values.password
                }
            }})}
        }
            validationSchema={validationSchema}
            >
                {
                    ({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                        <View style={{
                            gap:20,
                            height:'auto',
                            borderRadius: 5,
                            justifyContent: 'center',
                            alignItems:'center',
                            }}>
                            <View style={styles.subContainer}>
                                <TextInput
                                style={errors.username ? {...styles.textInput,borderWidth:2,borderRadius: 5,borderStyle:'solid',borderColor:'red'} : styles.textInput}
                                onChangeText={handleChange('username')}
                                value={values.username}
                                placeholder="Username"
                                />
                                {
                                    errors.username &&
                                    <CustomText customParams={{borderWidth:2,borderStyle:'solid',borderRadius:5,padding:10,borderColor:'red',width:'100%'}}>
                                        {errors.username}
                                    </CustomText>
                                }
                            </View>
                            <View style={styles.subContainer}>
                                <TextInput
                                style={errors.password ? {...styles.textInput,borderWidth:2,borderRadius: 5,borderStyle:'solid',borderColor:'red'} : styles.textInput}
                                onChangeText={handleChange('password')}
                                value={values.password}
                                textContentType='password'
                                placeholder="Password"
                                secureTextEntry={true}
                                />
                                {
                                    errors.password &&
                                    <CustomText customParams={{borderWidth:2,borderStyle:'solid',borderRadius:5,padding:10,borderColor:'red'}}>
                                        {errors.password}
                                    </CustomText>
                                }
                            </View>
                            <View style={styles.subContainer}>
                                <TextInput
                                textContentType='password'
                                style={errors.passwordConfirmation ? {...styles.textInput,borderWidth:2,borderRadius: 5,borderStyle:'solid',borderColor:'red'} : styles.textInput}
                                onChangeText={handleChange('passwordConfirmation')}
                                value={values.passwordConfirmation}
                                placeholder="Password confirmation"
                                secureTextEntry={true}
                                />
                                {
                                    errors.passwordConfirmation &&
                                    <CustomText customParams={{borderWidth:2,borderStyle:'solid',borderRadius:5,padding:10,borderColor:'red'}}>
                                        {errors.passwordConfirmation}
                                    </CustomText>
                                }
                            </View>

                            <Button
                                onPress={() => handleSubmit()}
                                disabled={!errors}
                                title='Sign Up'
                            />

                        </View>
                    )
                }
            </Formik>
        </View>
    )
}