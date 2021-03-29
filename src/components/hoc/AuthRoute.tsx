import {Route, Redirect, RouteComponentProps } from 'react-router-dom';
import {StateValues} from '../../Models'
import {useSelector} from 'react-redux'
interface AuthUser  {
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
    let isLoggedIn =  useSelector<any>(state => state.reducer.isLoggedIn)
    const { userType } = props;
    if(userType === 'guest' && isLoggedIn && getToken()) return <Redirect to="/dashboard"/>
    else if(userType === 'private' && !getToken()) return <Redirect to="login"/>
    return  <Route {...props} />
}
