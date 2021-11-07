import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import DataFetch from './hooks/DataFetch'
import Increment from './hooks/Increment'
import Test from './hooks/Test'
import Signin from './pages/auth/Signin'
import Signup from './pages/auth/Signup'
import CustomerServices from './pages/CustomerServices'
import Deals from './pages/Deals'
import Home from './pages/Home'


const Routes = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/deals" component={Deals} />
                    <Route exact path="/customerservices" component={CustomerServices}/>
                    <Route exact path="/signin" component={Signin}/>
                    <Route exact path="/signup" component={Signup}/>

                    {/* hooks */}
                    <Route exact path="/hooks/increment" component={Increment}/>
                    <Route exact path="/hooks/useEffect" component={Test}/>
                    <Route exact path="/api/data" component={DataFetch}/>
                </Switch>
            </Router>
        </>
    )
}

export default Routes
