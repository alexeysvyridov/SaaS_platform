export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE= 'LOGIN_FAILURE';

export const loginSuccess = (user:object) => {
    return {
        type: LOGIN_SUCCESS,
        payload: user
    }
}
export const loginFailure = () => {
    return {
        type:  LOGIN_FAILURE,
        error: true
    }
}