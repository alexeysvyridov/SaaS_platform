import {LoggedIn, LoginFailure, StateValues, SignOut} from './Models'
import {LOGIN_SUCCESS, LOGIN_FAILURE, SIGN_OUT} from './types'
const defaultVal:StateValues = {
    isLoggedIn: false,
    user: null,
    error: false 
}

type ActionTypes = LoggedIn | LoginFailure | SignOut


const saveTokenToStorage = (userToken:object):void => {
    localStorage.setItem('userToken', JSON.stringify(userToken))
 }
const clearStorage = () => {
    localStorage.removeItem('userToken')
}

const reducer = (state:StateValues, action:ActionTypes) => {
    console.log(action);
    switch(action.type) {
        case LOGIN_SUCCESS: {  
            saveTokenToStorage(action.payload)
            return {
                ...state,
                user: action.payload,
                isLoggedIn: true
            }
        }
        case LOGIN_FAILURE: {
            return {
                ...state,
                isLoggedIn: false,
                error: action.error,
            }
        }
        case SIGN_OUT: {
            clearStorage()
            return {
                ...state,
                isLoggedIn: false,
                user: null
            }
        }
        default:
            return defaultVal;
    }
}
export default reducer;