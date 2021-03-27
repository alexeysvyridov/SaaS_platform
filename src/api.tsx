import {Dispatch} from 'redux'
import {loginSuccess, loginFailure} from './actions/actions'
import {LoggedIn} from './Models'
type Actipons = LoggedIn | {type:string}

export const fetchUser = (user:object) => {

    return async(dispatch:Dispatch<Actipons>) => {
        try {   
           let res = await fetch("http://localhost:3000/api/v1/auth/token", {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Accept':'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify(user)
            })
            dispatch(loginSuccess(user));

        } catch (error) {
            console.log(error);
            dispatch(loginFailure())
        }
    }
}