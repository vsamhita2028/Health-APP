import React from 'react'
import {useStyles} from './rootstyles'
import Start from './GettingStarted'
import Navbar from "./rootnavbar/navbar"

function Main() {
    const classes=useStyles()
    return (
        <div className={classes.bg1}>
            <Navbar/>
            <Start/>
        </div>
    )
}

export default Main
