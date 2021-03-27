import {LOGIN_SUCCESS, LOGIN_FAILURE, SIGN_OUT} from '../types'
import {LoggedIn, LoginFailure, SignOut} from '../Models'
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
export const SignOutAction = ():SignOut => {
    return {
        type: SIGN_OUT,
        isLoggedIn: false
    }
}