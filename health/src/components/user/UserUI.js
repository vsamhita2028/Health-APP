import React from 'react'
import { Switch,Route, Redirect, useRouteMatch } from 'react-router'
import Box from '@material-ui/core/Box'
import Home from './userhome/Home'
import Navbar from './usernavbar/Navbar'
import {useStyles} from './Styles'
function UserUI() {
    const classes=useStyles()
    let {url}=useRouteMatch()
    return (
        <Box className={classes.bg1}>
        <Navbar/>        
        <Switch>
            <Route exact path={`${url}/home`} component={Home}/>
            <Redirect to="/"/>
        </Switch>
        </Box>
    )
}

export default UserUI
