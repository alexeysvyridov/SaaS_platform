import {useDispatch, useSelector} from 'react-redux'
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom'
import {Dashboard} from '../Dashboard/Dashboard';
import {Events} from '../Events/Events';
import {Admin} from '../Admin/Admin';
import {Monitors} from '../Monitors/Monitors';
import {SignOutAction} from '../../../actions/actions'


export const Home = () => {
    const dispatch = useDispatch()
    const isLoggedIn = useSelector((state:any) => state.reducer.isLoggedIn)
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
               <Redirect from="*" to="/dashboard"/>
          </Switch>
      </Router>
    )
}
