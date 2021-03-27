import {Route, Redirect, RouteComponentProps  } from 'react-router-dom';
import {useSelector} from 'react-redux'
interface AuthUser  {
    isLoggedIn?: boolean,
    userType: string,
    path: string,
    render?: (props:RouteComponentProps<any>) => React.ReactNode,
    children?:React.ReactNode
}

export const AuthRoute = (props:AuthUser) => {
    const {isLoggedIn, user} = useSelector((store:any) => store.reducer) 
    const { userType } = props;
    if(userType === 'guest' && isLoggedIn) return <Redirect to="/home"/>
    else if(userType === 'private' && !isLoggedIn && !user) return <Redirect to="login"/>
    return  <Route {...props} />
}
