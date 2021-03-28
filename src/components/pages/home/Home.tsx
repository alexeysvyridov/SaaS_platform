import {useDispatch} from 'react-redux'
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom'


//components
import {Dashboard} from '../Dashboard/Dashboard';
import {Events} from '../Events/Events';
import {Admin} from '../Admin/Admin';
import {Monitors} from '../Monitors/Monitors';
import {SignOutAction} from '../../../actions/actions'


export const Home = () => {
    const dispatch = useDispatch()
    const signOut = () => {
        dispatch(SignOutAction())
    }
    return (
      <Router>
          <div>
              <ul>
                  <li>
                      <Link to="/dashboard">Dashboard</Link>
                  </li>
                  <li>
                      <Link to="/events">Events</Link>
                  </li>
                  <li>
                      <Link to="/monitors">Monitors</Link>
                  </li>
                  <li>
                      <Link to="/admin">Admin</Link>
                  </li>
              </ul>
              <button onClick={signOut}>Sign out</button>
          </div>
          <Switch>
              <Route path="/dashboard" component={Dashboard}/>
              <Route path="/events" component={Events}/>
              <Route path="/monitors" component={Monitors}/>
              <Route path="/admin" component={Admin}/>
              <Route render={() => <Redirect from="*" to="/dashboard"/>}/>
          </Switch>
      </Router>
    )
}
