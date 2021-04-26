import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {useStyles} from "./startedui"
function Navbar() {
    const classes = useStyles();
    return (
        <div>
            <AppBar position="static" color="transparent" elevation={0}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                    MedBay
                    </Typography>
                    <Button color="inherit" className={classes.pd}>Login</Button>
                    <Button color="inherit" className={classes.pd}>Register</Button> 
                    <Button color="inherit" className={classes.pd}>About</Button> 
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar
