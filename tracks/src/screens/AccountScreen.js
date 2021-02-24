import React, { useContext } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Button } from 'react-native-elements'
import { SafeAreaView } from 'react-navigation'
import { Context as AuthContext } from '../context/AuthContext'
import { FontAwesome } from '@expo/vector-icons';
const AccountScreen = () => {
    const { signout } = useContext(AuthContext)
    return (
        <SafeAreaView style={styles.container} forceInset={{top:'always'}} >
            <Text style={{ fontSize : 48 }}>AccountScreen</Text>
            <Button title="Sign out" onPress={signout} />
        </SafeAreaView>
    )
}

AccountScreen.navigationOptions={
    title:'Account',
    tabBarIcon:<FontAwesome name="gear" size={24} color="black" />
}

const styles = StyleSheet.create({
    container:{
        marginTop:100,
        flex:1
    }

})

export default AccountScreen;