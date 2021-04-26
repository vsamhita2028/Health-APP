import React from 'react'
import {Redirect, Route,Switch, useRouteMatch} from 'react-router-dom'
import AuthNavbar from './authnavbar'
import Adminsignup from './signup/adminsignup'
import Usersignup from './signup/usersignup'
function AuthUI() {
    let {url}=useRouteMatch()
    return (
        <>
        <AuthNavbar/>
        <Switch>
            <Route exact path={`${url}/usersignup`} component={Usersignup}/>
            <Route exact path={`${url}/adminsignup`} component={Adminsignup}/>
            {/* extra routes related to login or signup come here */}
            <Redirect to="/" />
        </Switch>
        </>
    )
}

export default AuthUI
