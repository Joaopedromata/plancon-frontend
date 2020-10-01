import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './pages/Login'
import Menu from './pages/Menu'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/menu" exact component={Menu} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes