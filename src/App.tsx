import {Provider} from 'react-redux'

import {LoginForm} from './components/pages/loginForm/LoginForm';
import {Home} from './components/pages/home/Home'
import {store} from './store'
import {Switch, Redirect, BrowserRouter as Route } from 'react-router-dom'
import {AuthRoute} from './components/hoc/AuthRoute'
import './App.css';


function App() {
  return (
    <Provider store={store}>
      <Route>
      <Switch>
        <AuthRoute path="/login" userType="guest" >
          <LoginForm/>
        </AuthRoute>
        <AuthRoute path="/home" render={() => <Home/>} userType="private"/>
        <Redirect from="*" to="/login"/>
      </Switch>
      </Route>
    </Provider>
    );
}

export default App;
