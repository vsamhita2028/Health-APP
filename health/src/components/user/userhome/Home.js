import React from 'react'
import {Box,Paper,Typography,Grid, Container} from '@material-ui/core'
import Search from './Search'
import Result from './Result'
import {useStyles} from './HomeStyles'
function Home() {
    const classes=useStyles()
    return (
        <Container maxWidth="md">
            <Box pt={2.5}>
            <Grid container direction="column" spacing={1}>
                <Grid item xs={12}>
                    <Grid container justify="center"> 
                        <Grid item xs={5} >
                            <Box height={60}>
                                <Search/>
                            </Box>
                        </Grid>
                    </Grid>     
                </Grid>                  
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={3}> 
                        <Grid item xs={12} sm={6} md={4}>
                            <Result/>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Result/>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Result/>
                        </Grid>   
                        <Grid item xs={12} sm={6} md={4}>
                            <Result/>
                        </Grid>   
                        <Grid item xs={12} sm={6} md={4}>
                            <Result/>
                        </Grid>   
                        <Grid item xs={12} sm={6} md={4}>
                            <Result/>
                        </Grid>   
                         
                      
                    </Grid>
                </Grid>      
            </Grid>
            </Box>
        </Container>
    )
}

export default Home
