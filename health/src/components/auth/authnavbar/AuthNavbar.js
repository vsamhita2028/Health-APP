import React from 'react'
import {AppBar, Button, Typography, Toolbar, Avatar,Box,Paper, MenuItem} from '@material-ui/core'
import {useStyles} from './AuthNavbarStyles'
import {Link} from 'react-router-dom'
function AuthNavbar() {
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
                    <Link to="/" className={classes.link}><Button color="inherit" className={classes.btn}>Home</Button></Link>

                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default AuthNavbar


// <Link to="/" className={classes.link}><Button color="inherit" className={classes.btn}>Home</Button></Link>