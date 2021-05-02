import React from 'react'
import {AppBar, Divider, Typography, Toolbar, Avatar,Box,Paper, MenuItem} from '@material-ui/core'
import {Menu} from '@material-ui/icons'
import {useStyles} from './NavbarStyles'
import {Link} from 'react-router-dom'
function Navbar() {
    const classes=useStyles()
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
                    <Box mr={2} p={1} className={classes.menuitem}>
                        <Link to="/" className={classes.link}>
                            <Typography className={classes.linktext}>MEDICAL PROFILE</Typography>
                        </Link>
                    </Box>


                    {/* USERNAME and AVATAR */}
                    <Avatar
                    src="/beymax.jpg" 
                    className={classes.avatar}
                    />
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navbar
