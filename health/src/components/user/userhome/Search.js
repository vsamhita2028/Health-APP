import React from 'react'
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import {search} from './HomeStyles'
function Search() {
    const classes=search()
    return (
    <Paper component="form" className={classes.root}>
        <InputBase
            className={classes.input}
            placeholder="Enter symptoms"
        />
        <IconButton type="submit" className={classes.iconButton} aria-label="search">
            <SearchIcon />
        </IconButton>
    </Paper>  
    )
}

export default Search
