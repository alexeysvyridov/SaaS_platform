import {LoggedIn, LoginFailure, StateValues} from './Models'

const defaultVal:StateValues = {
    isloggedIn: false,
    user: {},
    error: false 
}

type ActionTypes = LoggedIn | LoginFailure

const reducer = (state:StateValues, action:ActionTypes) => {
    switch(action.type) {
        case 'LOGIN_SUCCESS': {
            return {
                ...state,
                user: action.payload,
            }
        }
        case 'LOGIN_FAILURE': {
            return {
                ...state,
                isloggedIn: false,
                error: action.error,
            }
        }
        default:
            return defaultVal;
    }
}
export default reducer;