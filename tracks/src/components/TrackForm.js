import React, { useState, useEffect, useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import { Button, Input } from 'react-native-elements'
import { Context as LocationContext } from '../context/LocationContext'
import useSaveTrack from '../hooks/useSaveTrack'


const TrackForm = () => {
    const { state: { name, recording, locations },
        startRecording,
        stopRecording, changeName } = useContext(LocationContext)
    const [saveTrack] = useSaveTrack()
    return <>
        <Input value={name} onChangeText={changeName} />
        {recording ? <Button title="Stop" onPress={stopRecording} /> :
            <Button title="start recording" onPress={startRecording} />}
        {
            !recording && locations.length ?
                <Button title="Save Recording" onPress={saveTrack} /> : null
        }

    </>
}
const styles = StyleSheet.create({

})
export default TrackForm;