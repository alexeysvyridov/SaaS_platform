import {Route, Redirect, RouteComponentProps  } from 'react-router-dom';
interface AuthUser  {
    isLoggedIn?: boolean,
    userType: string,
    path: string,
    render?: (props:RouteComponentProps<any>) => React.ReactNode,
    children?:React.ReactNode
}

export const AuthRoute = (props:AuthUser) => {
    const { isLoggedIn=false, userType='private' } = props;
    if(userType === 'guest' && isLoggedIn) return <Redirect to="home"/>
    else if(userType === 'private' && !isLoggedIn) return <Redirect to="login"/>
    return  <Route {...props} />
}
