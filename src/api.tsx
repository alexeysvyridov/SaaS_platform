import {loginSuccess,loginFailure} from './actions'

const fetchUser = async(user) => {
    return dispacth => {
        try {
            fetch("api/v1/auth/token", {
                method: 'POST',
                headers: {
                    'Accept': 'application/x-www-form-urlencoded',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            }).then((res) => {
                dispacth(loginSuccess(res))
            })
        } catch (error) {
            console.log(error);
            dispacth(loginFailure())
        }
}
}