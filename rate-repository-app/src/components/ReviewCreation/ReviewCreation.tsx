import { Formik } from "formik"
import {TextInput, View, Text, StyleSheet, ScrollView, Button, GestureResponderEvent} from 'react-native'
import React from 'react'
import {useEffect} from 'react'
import * as yup from 'yup';
import CustomText from "../CustomText";
import { theme } from "../../../theme";
import useCreateReview from "../../hooks/useCreateReview";
import useCustomNavigate from "../../hooks/useCustomNavigate";

const styles = StyleSheet.create({
    textInput:{
        borderRadius: 5,
        padding:10,
        width:200,
        marginVertical:10,
        backgroundColor: theme.colors.secondary,
        textAlign: 'center'
    },
    flexColCenteredContainer:{
        justifyContent: 'center',
        alignItems:'center',
        flexDirection: 'column'
    },
    submitButton:{
        width:150,
        height:80,
        borderRadius: 5,
        backgroundColor: theme.colors.primary,
        fontSize: theme.fontSizes.heading,
        fontWeight: theme.fontWeights.bold
    }
})

const reviewCreationFormValidationSchema = yup.object().shape({
    repoOwner: yup
        .string()
        .required('Repository owner is required'),
    repoName: yup
        .string()
        .required('Repository name is required'),
    rating: yup
        .number()
        .min(0, 'Rating cannot be less then 0')
        .max(100, 'Rating cannot be more than 100')
        .required('Rating is required'),
    text: yup
        .string(),
})

export default () => {
    const { createReview, result } = useCreateReview()
    const { customNavigate } = useCustomNavigate()

    useEffect(() => {
        if(result){
            customNavigate(`/repository/${result.createReview.repositoryId}`,'Repositories')
        }
    },[result])

    return(
        <Formik
        validationSchema={reviewCreationFormValidationSchema}
        initialValues={{repoOwner: '',repoName: '', rating:100, text: undefined}}
        validateOnChange={true}
        onSubmit={ (values) => {
            console.log({ownerName:values.repoOwner,rating:values.rating,repositoryName: values.repoName, text:values.text})
            createReview({variables:{review:{ownerName:values.repoOwner,rating:values.rating,repositoryName: values.repoName, text:values.text}}})}}>
            {({handleChange, handleBlur, handleSubmit, values,errors}) => (
                    <ScrollView
                    contentContainerStyle={{height:'100%',width:'100%',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>

                        <View style={styles.flexColCenteredContainer}>
                        <Text>Repository Owner</Text>
                        <TextInput
                        style={errors.repoOwner ? {...styles.textInput,borderWidth:2,borderRadius: 5,borderStyle:'solid',borderColor:'red'} : styles.textInput}
                        onChangeText={handleChange('repoOwner')}
                        value={values.repoOwner}
                        />
                        {
                            errors.repoOwner && <CustomText customParams={{borderWidth:2,borderStyle:'solid',borderRadius:5,padding:10,borderColor:'red'}}>
                                {errors.repoOwner}
                            </CustomText>
                        }
                        </View>

                        <View style={styles.flexColCenteredContainer}>
                        <Text>Repository Name</Text>
                        <TextInput
                        onChangeText={handleChange('repoName')}
                        style={errors.repoName ? {...styles.textInput,borderWidth:2,borderRadius: 5,borderStyle:'solid',borderColor:'red'} : styles.textInput}
                        value={values.repoName}
                        />
                        {
                            errors.repoName && <CustomText customParams={{borderWidth:2,borderStyle:'solid',borderRadius:5,padding:10,borderColor:'red'}}>
                                {errors.repoName}
                            </CustomText>
                        }
                        </View>

                        <View style={styles.flexColCenteredContainer}>
                        <Text>Rating</Text>
                        <TextInput
                        onChangeText={handleChange('rating')}
                        value={values.rating.toString()}
                        style={errors.rating ? {...styles.textInput,borderWidth:2,borderRadius: 5,borderStyle:'solid',borderColor:'red'} : styles.textInput}
                        />
                        {
                            errors.rating && <CustomText customParams={{borderWidth:2,borderStyle:'solid',borderRadius:5,padding:10,borderColor:'red'}}>
                                {errors.rating}
                            </CustomText>
                        }
                        </View>

                        <View style={styles.flexColCenteredContainer}>
                        <Text>Review Text</Text>
                        <TextInput
                        style={ styles.textInput }
                        onChangeText={handleChange('text')}
                        value={values.text}
                        />
                        </View>
                        <Button
                        color={theme.colors.primary}
                        disabled={!(errors)}
                        testID='SignInButton'
                        onPress={
                            handleSubmit as (values:
                                GestureResponderEvent |
                                React.FormEvent<HTMLFormElement> |
                                undefined) => void
                        } title='Create new review' />
                    </ScrollView>
            )}
        </Formik>
    )
}