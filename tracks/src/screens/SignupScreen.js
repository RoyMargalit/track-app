import React, { useContext } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Context as AuthContext } from '../context/AuthContext'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'
import { NavigationEvents } from 'react-navigation'


const SignupScreen = ({ navigation }) => {

    const { state, signup, clearErrorMessage } = useContext(AuthContext)
   
    return (
        <View style={styles.container}>
            <NavigationEvents
                onWillFocus={clearErrorMessage}
            />
            <AuthForm
                headerText="Sign up for tracker"
                errorMessage={state.errorMessage}
                submitButtonText="Sign up"
                onSubmit={({ email, password }) => signup({ email, password })}
            />
            <NavLink
                routeName="Signin"
                text="already have an account? sign in instead"
            />

        </View>
    )
}


SignupScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 100,
    },
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

})

export default SignupScreen;