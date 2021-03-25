import {Reducer} from 'redux'
import {LOGIN_SUCCESS, LOGIN_FAILURE} from './actions/actions'
type StateValues = {
    isloggedIn: boolean;
    user: object;
    error: boolean; 
}

const defaultVal:StateValues = {
    isloggedIn: false,
    user: {},
    error: false 
}


export type LoggedIn = { type: typeof LOGIN_SUCCESS, payload: object }
export type LoginFailure = { type: typeof LOGIN_FAILURE, error:  boolean }
 type actionTypes = LoggedIn | LoginFailure
const reducer = (state:StateValues, action:actionTypes) => {
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