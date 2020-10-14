import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from './pages/Login'
import Menu from './pages/Menu'
import Collaborator from './pages/Collaborator'
import Locations from './pages/Location'
import InOrOut from './pages/InOrOut'
import Input from './pages/Input'
import Output from './pages/Output'
import CollabDetails from './pages/CollabDetails'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/menu" component={Menu} />
                <Route path="/colaboradores" exact component={Collaborator} />
                <Route path="/colaboradores/detalhes" component={CollabDetails} />
                <Route path="/obras" component={Locations} />
                <Route path="/estoque" exact component={InOrOut} />
                <Route path="/estoque/entrada" component={Input} />
                <Route path="/estoque/saida" component={Output} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes