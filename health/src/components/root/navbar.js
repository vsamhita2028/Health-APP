import React from 'react'
import {Link} from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {useStyles} from "./rootstyles"
function Navbar() {
    const classes = useStyles();
    return (
        <div>
            <AppBar position="static" color="transparent" elevation={0}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        MedBay
                    </Typography>
                    <Link to="/" className={classes.link}><Button color="inherit" className={classes.btn}>About</Button></Link>
                    <Link to="/auth/userlogin" className={classes.link}><Button color="inherit" className={classes.btn}>Login</Button></Link>
                    <Link to="/auth/usersignup" className={classes.link}><Button color="inherit" className={classes.btn}>Register</Button></Link>

                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar
