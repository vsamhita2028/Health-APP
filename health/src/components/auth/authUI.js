import React from 'react'
import {Redirect, Route,Switch, useRouteMatch} from 'react-router-dom'
import AuthNavbar from './authnavbar/AuthNavbar'
import Adminsignup from './signup/adminsignup'
import Usersignup from './signup/usersignup'
import UserLogin from "./login/userlogin"
import {useStyles} from './Styles'

function AuthUI() {
    let {url}=useRouteMatch()
    const classes=useStyles()
    return (
        <div className={classes.bg1}>
        <AuthNavbar/>
        <Switch>
            <Route exact path={`${url}/usersignup`} component={Usersignup}/>
            <Route exact path={`${url}/adminsignup`} component={Adminsignup}/>
            <Route exact path={`${url}/userlogin`} component={UserLogin}/>
            <Route exact path={`${url}/adminlogin`} component={UserLogin}/>
            {/* extra routes related to login or signup come here */}
            <Redirect to="/" />
        </Switch>
        </div>
    )
}

export default AuthUI
