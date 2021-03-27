import { LOGIN_SUCCESS, LOGIN_FAILURE} from '../types'
export type LoggedIn = {
     type: typeof LOGIN_SUCCESS, payload: object 
    }
export type LoginFailure = { type: typeof LOGIN_FAILURE, error?:  boolean }
export type StateValues = {
    isloggedIn: boolean;
    user: object;
    error: boolean; 
}
export type LoginAndPassword = {
    username: string,
    password: string
}