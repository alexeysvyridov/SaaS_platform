import {Dispatch} from 'redux'
import {loginSuccess, loginFailure} from './actions/actions'
import {LoggedIn} from './Models'
type Actions = LoggedIn | {type:string}
type User = {
    username: string,
    password: string
}
export const fetchUser = (user:User) => {
    return async(dispatch:Dispatch<Actions>) => {
        try {   
           let res = await fetch("/api/v1/auth/token", {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                referrerPolicy: 'strict-origin-when-cross-origin',
                
                body: `grant_type=password&username=${user.username}&password=${user.password}`
            })
            let response = await res.json()
            dispatch(loginSuccess(response));
        } catch (error) {
            console.log(error);
            dispatch(loginFailure())
        }
    }
}