import {Provider} from 'react-redux'
import {Switch, Redirect, BrowserRouter as Router, Route } from 'react-router-dom'
import {LoginForm} from './components/pages/loginForm/LoginForm';
import {Home} from './components/pages/Home/Home'
import {store} from './store'
import {AuthRoute} from './components/hoc/AuthRoute'
import './App.css';
function App() {

  return (
    <div className="mainContainer">
      <Provider store={store}>
        <Router>
        <Switch>
          <AuthRoute exact path="/login" userType="guest" >
            <LoginForm/>
          </AuthRoute>
          <AuthRoute exact  path="/" render={() => <Home/>} userType="private"/>
          <Route render={() => <Redirect to="/"/>}/>
        </Switch>
        </Router>
      </Provider>

    </div>
    );
}

export default App;
