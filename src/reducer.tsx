import {LoggedIn, LoginFailure, StateValues, SignOut} from './Models'
import {LOGIN_SUCCESS, LOGIN_FAILURE, SIGN_OUT} from './types'
const defaultVal:StateValues = {
    isLoggedIn: false,
    user: null,
    error: false 
}

type ActionTypes = LoggedIn | LoginFailure | SignOut

const reducer = (state:StateValues, action:ActionTypes) => {
    switch(action.type) {
        case LOGIN_SUCCESS: {
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
            return {
                ...state,
                isLoggedIn: action.isLoggedIn,
            }
        }
        default:
            return defaultVal;
    }
}
export default reducer;