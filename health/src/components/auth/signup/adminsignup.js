import React,{useState} from 'react'
import {useStyles} from  "./SignupStyles";
import {Link} from 'react-router-dom'
import { Box,Paper, Typography, Button, TextField, Grid} from '@material-ui/core';
function Adminsignup() {
    const classes = useStyles();
    const[logindets, setLoginDets] = useState(
        {
            firstname:{val:"",flag:false,msg:""},
            lastname : {val:"",flag:false,msg:""},
            email:{val:"",flag:false,msg:""},
            password:{val:"",flag:false,msg:""},
            confirmpwd: {val:"",flag:false,msg:""}
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
        else if(e.target.name==="firstname"){
            if(e.target.value.length!==0)
                setLoginDets({...logindets,firstname: { val:e.target.value,flag:false,msg:""}});
            else
                setLoginDets({...logindets,firstname: { val:e.target.value,flag:true,msg:"Please Fill the field"}});
        }
        else if(e.target.name==="lastname"){
            if(e.target.value.length!==0)
                setLoginDets({...logindets,lastname: { val:e.target.value,flag:false,msg:""}});
            else
                setLoginDets({...logindets,lastname: { val:e.target.value,flag:true,msg:"Please Fill the field"}});
        }
        else if(e.target.name==="confirmpwd"){
            if(e.target.value===logindets.password.val)
                setLoginDets({...logindets,confirmpwd: { val:e.target.value,flag:false,msg:""}});
            else
                setLoginDets({...logindets,confirmpwd: { val:e.target.value,flag:true,msg:"Password and Confirm password don't match :("}});
        }

    }
    const handelsubmit =(e) =>{
    e.preventDefault()
    if(!logindets.email.flag && !logindets.password.flag && !logindets.firstname.flag && !logindets.lastname.flag && !logindets.confirmpwd.flag)
        console.log(logindets);
    else    
        alert("Invalid Inputs")
    }
    return ( 
        <Grid container className={classes.maincenter}>
            <Grid item xs={11} sm={7} md={6} lg={4}> 
                <Paper elevation={4}>
                    <Box p={4}>
                        <Typography variant="h4" align="center" gutterBottom={true}>ADMIN SIGNUP</Typography>
                        <form noValidate autoComplete="off" onSubmit={handelsubmit}>
                            <Box component="div" mb={2} mt={4}>
                                <TextField 
                                size="small"
                                id="firstname" 
                                name="firstname" 
                                label="First Name" 
                                variant="outlined" 
                                className={classes.textstyle} 
                                error={logindets.firstname.flag} 
                                onChange={(e)=>handelchange(e)} 
                                helperText={logindets.firstname.msg} />
                            </Box>
                            <Box component="div" mb={2}>
                                <TextField 
                                size="small"
                                id="lastname"
                                name="lastname" 
                                label="Last Name" 
                                variant="outlined" 
                                className={classes.textstyle} 
                                error={logindets.lastname.flag} 
                                onChange={(e)=>handelchange(e)} 
                                helperText={logindets.lastname.msg}/>
                            </Box>
                            <Box component="div" mb={2} >
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
                            <Box component="div" mb={2} >
                                <TextField 
                                size="small"
                                id="confirmed" 
                                name="confirmed" 
                                label="Confirm Password" 
                                variant="outlined" 
                                type="password" 
                                className={classes.textstyle} 
                                error={logindets.confirmpwd.flag} 
                                onChange={(e)=>handelchange(e)} 
                                helperText={logindets.confirmpwd.msg} />
                            </Box>
                            <Box component="div" mb={2} textAlign="center">
                                <Button 
                                type="submit" 
                                variant="outlined" 
                                color="primary" 
                                className={classes.btn} >
                                    SIGN IN
                                </Button>
                            </Box>
                        </form>
                        <div align="center">
                            <small>Not an Admin?
                                <Link to="/auth/usersignup" className={classes.link}>click here</Link>
                            </small>
                        </div>
                    </Box>
                </Paper>
            </Grid>
        </Grid>
);
}

export default Adminsignup
