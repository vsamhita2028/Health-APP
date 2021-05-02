import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {useStyles} from "./authstyles"
import {Link} from 'react-router-dom'
function AuthNavbar() {
    const classes = useStyles();
    return (
        <div>
            <AppBar position="static" color="transparent" elevation={0}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                    MedBay
                    </Typography>
                    <Link to="/" className={classes.link}><Button color="inherit" className={classes.btn}>Home</Button></Link>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default AuthNavbar
