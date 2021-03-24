
type StateValues = {
    isloggedIn: boolean;
    user: object;
    error: null; 
}

const defaultVal = {
    isloggedIn: false,
    user: {},
    error: null 
}

export type LoggedIn = { type: "LOGIN_USER", payload: object }

const reducer = (state:StateValues = defaultVal, action:LoggedIn ) => {
    switch(action.type) {
        case 'LOGIN_USER': {
            return {
                ...state,
                user: action.payload,
            }
        }
        default:
            return defaultVal;
    }
}
export default reducer;