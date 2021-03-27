import {LOGIN_SUCCESS, LOGIN_FAILURE} from '../types'
import {LoggedIn, LoginFailure} from '../Models'
export const loginSuccess = (user:object):LoggedIn => {
    return {
        type: LOGIN_SUCCESS,
        payload: user
    }
}
export const loginFailure = ():LoginFailure => {
    return {
        type:  LOGIN_FAILURE,
        error: true
    }
}