import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Deals from './pages/Deals'
import Home from './pages/Home'


const Routes = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/deals" component={Deals} />
                </Switch>
            </Router>
        </>
    )
}

export default Routes
