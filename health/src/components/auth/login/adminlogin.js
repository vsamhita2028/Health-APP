import React,{useState} from 'react'
import {useStyles} from  "./LoginStyles";
import { Box,Paper, Typography, Button, TextField, Grid} from '@material-ui/core';
import {Link} from 'react-router-dom'
const AdminLogin = () => {
    const classes = useStyles();
    const[logindets, setLoginDets] = useState(
        {
            email:{val:"",flag:false,msg:""},
            password:{val:"",flag:false,msg:""},
        }
    );
    const handelchange=(e)=>{
        if(e.target.name==="email"){
            const reg= /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(e.target.value.match(reg))
                setLoginDets({...logindets,email:{ val:e.target.value,flag:false, msg:""} });
            else
                setLoginDets({...logindets,email:{ val:e.target.value,flag:true,msg: "Incorrect entry."} });
        }
        else if(e.target.name==="password"){
            if(e.target.value.length>8)
                setLoginDets({...logindets,password: { val:e.target.value,flag:false,msg:""}});
            else
                setLoginDets({...logindets,password: { val:e.target.value,flag:true,msg:"Password must contain more than 8 characters."}});
        }
    }
     const handelsubmit =(e) =>{
        e.preventDefault()
        if(!logindets.email.flag && !logindets.password.flag)
            console.log(logindets);
        else    
            alert("Invalid Inputs")
     }
    return ( 
        <Grid container className={classes.maincenter}>
            <Grid item xs={11} sm={7} md={6} lg={4}> 
                <Paper elevation={4}>
                    <Box p={4}>
                        <Typography variant="h4" align="center" gutterBottom={true}>ADMIN LOGIN</Typography>
                        <form noValidate autoComplete="off" onSubmit={handelsubmit}>
                            <Box component="div" mb={2} mt={7}  >
                                <TextField 
                                size="small"
                                id="email" 
                                name="email" 
                                label="Email/Phone Number" 
                                variant="outlined" 
                                className={classes.textstyle} 
                                error={logindets.email.flag} 
                                onChange={(e)=>handelchange(e)} 
                                helperText={logindets.email.msg}/>
                            </Box>
                            <Box component="div" mb={2} >
                                <TextField
                                size="small"
                                id="password" 
                                name="password" 
                                label="Password" 
                                variant="outlined" 
                                type="password" 
                                className={classes.textstyle} 
                                error={logindets.password.flag} 
                                onChange={(e)=>handelchange(e)} 
                                helperText={logindets.password.msg}/>
                            </Box>
                            <Box component="div" mb={2} align="center">
                            <Button
                            size="large"
                            type="submit" 
                            variant="outlined" 
                            color="primary"
                            className={classes.btn}
                            >LOGIN</Button>
                            </Box>
                        </form>
                        <div align="center">
                            <small>Not an Admin?
                                <Link to="/auth/userlogin" className={classes.link}>click here</Link>
                            </small>
                        </div>
                    </Box>
                </Paper>
            </Grid>
        </Grid>
);
}
 
export default AdminLogin;