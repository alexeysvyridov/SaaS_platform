import {Dispatch} from 'redux'
import {loginSuccess,loginFailure, LOGIN_SUCCESS, LOGIN_FAILURE} from './actions/actions'

type LoggedIn = { type: typeof LOGIN_SUCCESS, payload: object }
type LoginFailure = { type: typeof LOGIN_FAILURE, error:  boolean }

export const fetchUser = async(user:object) => (dispatch:Dispatch<LoggedIn | LoginFailure>) => {
        try {
            fetch("api/v1/auth/token", {
                method: 'POST',
                headers: {
                    'Accept': 'application/x-www-form-urlencoded',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            }).then((res) => {
              
            })
        } catch (error) {
            console.log(error);
       
        }
}