import { LOGIN_SUCCESS, LOGIN_FAILURE, SIGN_OUT} from '../types'
export type LoggedIn = {
    type: typeof LOGIN_SUCCESS,
    payload: object,
    isLoggedIn?: boolean 
}
export type LoginFailure = { type: typeof LOGIN_FAILURE, error?:  boolean }
export type StateValues = {
    isLoggedIn: boolean;
    user: null | object;
    error: boolean; 
}
export type LoginAndPassword = {
    username: string,
    password: string
}

export type SignOut = {
    type: typeof SIGN_OUT,
}