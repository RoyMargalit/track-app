import React, { useState } from 'react'
import {  Text, Button, StyleSheet } from 'react-native'
import { Input } from 'react-native-elements'

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <>
            <Text style={styles.header} >{headerText}</Text>
            <Input label="Email"
                value={email}
                autoCapitalize='none'
                onChangeText={(newEmail) => {
                    setEmail(newEmail)
                }} />
            <Input label="Password"
                secureTextEntry={true}
                value={password}
                autoCapitalize='none'
                onChangeText={setPassword} />
            { errorMessage ? 
            <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
            <Button style={styles.btn}
                onPress={() => onSubmit({ email, password })}
                style={styles.btn} title={submitButtonText} />
        </>

    )
}

const styles = StyleSheet.create({
    spacer: {
        margin: 15
    },
    btn: {
        margin: 15,
        fontSize: 40
    },
    header: {
        fontSize: 36,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: 20,
    },
    errorMessage: {
        fontSize: 16,
        color: 'red',
        margin: 15
    },
    link: {
        color: 'blue',
        margin: 15,
    }
})

export default AuthForm;