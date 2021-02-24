import AsyncStorage from '@react-native-async-storage/async-storage';
import createDataContext from '../context/createDataContext'
import trackerApi from '../api/tracker'
import { navigate } from '../navigationRef'
const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return { ...state, errorMessage: action.payload }
        case 'signin':
            return { errorMessage: '', token: action.payload }
        case 'signout':
            return { token:null,errorMessage:'' }
        case 'clear_error_message':
            return { ...state, errorMessage: '' }
        default:
            return state;
    }
}

const clearErrorMessage = dispatch => () => {
    dispatch({ type: 'clear_error_message' })
}

const tryLocalSignin = dispatch => async () => {
    const token = await AsyncStorage.getItem('token')
    if (token) {
        dispatch({ type: 'signin', payload: token })
        navigate('TrackList')
    } else {
        console.log('could not find token');
        navigate('Signup')
    }

}
const signup = (dispatch) => async ({ email, password }) => {
    try {
        const response = await trackerApi.post('/signup', { email, password })
        await AsyncStorage.setItem('token', response.data.token)
        console.log(response.data);
        dispatch({ type: 'signin', payload: response.data.token })

        //navigate to main flow
        navigate('TrackList')

    } catch (err) {
        dispatch({ type: 'add_error', payload: 'Something went wrong with sign up' })
    }
}

const signin = (dispatch) => async ({ email, password }) => {
    try {
        const response = await trackerApi.post('/signin', { email, password })
        await AsyncStorage.setItem('token', response.data.token)
        dispatch({ type: 'signin', payload: response.data.token })
        navigate('TrackList')
    } catch (err) {
        console.log(err);
        dispatch({
            type: 'add_error',
            payload: 'Something went wrong signing in'
        })
    }
}

const signout = dispatch => async ({ email, password }) => {
    console.log(AsyncStorage );
    await AsyncStorage.removeItem('token')
    dispatch({type:'signout'})
    navigate('loginFlow')
    
}


export const { Provider, Context } = createDataContext(
    authReducer,
    { signup, signin, signout, clearErrorMessage, tryLocalSignin },
    { token: null, errorMessage: '' }
);