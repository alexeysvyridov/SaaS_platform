import {Provider} from 'react-redux'
import {Switch, Redirect, BrowserRouter as Router, Route } from 'react-router-dom'
import {useEffect} from 'react'
import {LoginForm} from './components/pages/loginForm/LoginForm';
import {Home} from './components/pages/home/Home'
import {store} from './store'
import {AuthRoute} from './components/hoc/AuthRoute'

import {Dashboard} from './components/pages/Dashboard/Dashboard';
import {Events} from './components/pages/Events/Events';
import {Admin} from './components/pages/Admin/Admin';
import {Monitors} from './components/pages/Monitors/Monitors';
import './App.css';

function App() {

  return (
    <Provider store={store}>
      <Router>
      <Switch>
        <AuthRoute path="/login" userType="guest" >
          <LoginForm/>
        </AuthRoute>
        <AuthRoute path="/" render={() => <Home/>} userType="private"/>
        <Route path="/dashboard">
          <Dashboard/>
        </Route>
        <Route path="/events">
          <Events/>
        </Route>
        <Route path="/monitors">
          <Monitors/>
        </Route>
        <Route path="/admin">
          <Admin/>
        </Route>
      </Switch>
      </Router>
      
    </Provider>
    );
}

export default App;
