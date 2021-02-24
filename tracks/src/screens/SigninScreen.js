import React, { useContext } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Context as AuthContext } from '../context/AuthContext'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'
import { NavigationEvents } from 'react-navigation'
const SigninScreen = () => {
    const { state, signin,clearErrorMessage } = useContext(AuthContext)

    return (
        <View style={styles.container}>
            <NavigationEvents
                Focus={clearErrorMessage}
            />
            <AuthForm
                headerText="Sign in to your account"
                errorMessage={state.errorMessage}
                submitButtonText="Sign in"
                onSubmit={({ email, password }) => { signin({ email, password }) }}

            />
            <NavLink
                text="Dont have an account? Sign Up"
                routeName="Signup"
            />
        </View>
    )

}

SigninScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 100,
        flex: 1,
        justifyContent: 'center'
    }
})

export default SigninScreen;