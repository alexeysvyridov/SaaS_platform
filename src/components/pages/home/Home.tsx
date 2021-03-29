import {BrowserRouter as Router} from 'react-router-dom'

import {Navigation} from './Navigation'
import MenuAppBar from './MenuAppBar'
import './Home.css'
export const Home = () => {
    return (
        <>
            <MenuAppBar/>  
            <Router>
                <div className="containerHome">
                    <Navigation/>  
                </div>
            </Router>
        </>
    )
}
