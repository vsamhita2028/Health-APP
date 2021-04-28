import React from 'react'
import {AppBar, IconButton, Typography, Toolbar, Avatar,Box,Paper, MenuItem} from '@material-ui/core'
import {Menu} from '@material-ui/icons'
import {useStyles} from './NavbarStyles'
import {Link} from 'react-router-dom'
function Navbar() {
    const classes=useStyles()
    return (
        <Box p={1} >
            <AppBar position="sticky" color="inherit" elevation={5} className={classes.appbar}>
                <Toolbar>                    
                    <Paper elevation={4} className={classes.logo}>
                        <Box p={1}>
                            <Typography variant="h6" className={classes.logotext}>BAYMAX</Typography>
                        </Box>
                    </Paper>

                    <div className={classes.grow}></div>

                    {/* MENU ITEMS */}
                    <Box mr={2} p={1} className={classes.menuitem}>
                        <Link to="/" className={classes.link}>
                            <Typography className={classes.linktext}>MEDICAL PROFILE</Typography>
                        </Link>
                    </Box>


                    {/* USERNAME and AVATAR */}
                    <Box mr={2}><Typography className={classes.user}>Baymax</Typography></Box>
                    <Avatar
                    src="/beymax.jpg" 
                    className={classes.shadow}
                    />
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navbar
