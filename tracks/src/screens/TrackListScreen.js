import React, { useContext } from 'react'
import { StyleSheet, View,Text, FlatList, TouchableOpacity } from 'react-native'
import { NavigationEvents } from 'react-navigation'
import { ListItem } from 'react-native-elements'
import { Context as TrackContext } from '../context/TrackContext'
const TrackListScreen = ({ navigation }) => {


    const { state, fetchTracks } = useContext(TrackContext)
    console.log(state);
    return (
        <>
            <NavigationEvents onWillFocus={fetchTracks} />
            <FlatList
                data={state}
                keyExtractor={item => {
                    item._id
                    console.log(item.name);
                }}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('TrackDetail', { _id: item._id })}>
                            <View style={styles.listItem}>
                                <Text chevron>{item.name} </Text>
                            </View>
                        </TouchableOpacity>)

                }
                }

            />
        </>
    )
}

TrackListScreen.navigationOptions = {
    title: 'Tracks'
}

const styles = StyleSheet.create({
    listItem:{
        padding:20,
        borderColor:'#292929',
        borderWidth:1,
        marginTop:10
    }
})

export default TrackListScreen;