import React from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'

const NavLink = ({ navigation, text, routeName, }) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
            <Text style={styles.link}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    link: {
        color: 'blue',
        margin: 15,
    }
})

export default withNavigation(NavLink)