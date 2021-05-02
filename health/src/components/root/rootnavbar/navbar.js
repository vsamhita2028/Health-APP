import React from 'react'
import {Link} from 'react-router-dom'
import {AppBar, Button, Toolbar,Paper,Box,Typography} from '@material-ui/core'
import {useStyles} from "./RootNavbarStyles"
function Navbar() {
    const classes = useStyles();
    return (
        <Box p={1}>
            <AppBar color="inherit" elevation={5} className={classes.appbar} position="sticky">
                <Toolbar>                    
                    <Paper elevation={4} className={classes.logo}>
                        <Box p={1}>
                            <Typography variant="h6" className={classes.logotext}>BAYMAX</Typography>
                        </Box>
                    </Paper>

                    <div className={classes.grow}></div>

                    {/* MENU ITEMS */}
                    <Link to="/" className={classes.link}><Button color="inherit" className={classes.btn}>About</Button></Link>
                    <Link to="/auth/userlogin" className={classes.link}><Button color="inherit" className={classes.btn}>Login</Button></Link>
                    <Link to="/auth/usersignup" className={classes.link}><Button color="inherit" className={classes.btn}>Register</Button></Link>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navbar


