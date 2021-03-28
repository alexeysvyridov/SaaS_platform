import {Route, Redirect, RouteComponentProps } from 'react-router-dom';
interface AuthUser  {
    isLoggedIn?: boolean,
    userType: string,
    path: string,
    render?: (props:RouteComponentProps<any>) => React.ReactNode,
    children?:React.ReactNode,
    exact?: boolean
}
const getToken = () => {
    const userToken =  JSON.parse(localStorage.getItem('userToken')!)
    return userToken
}
export const AuthRoute = (props:AuthUser) => {
    const { userType } = props;
    if(userType === 'guest' && getToken()) return <Redirect to="/dashboard"/>
    else if(userType === 'private' && !getToken()) return <Redirect to="login"/>
    return  <Route {...props} />
}
