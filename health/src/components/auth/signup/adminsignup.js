import React from 'react'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import {useStyles} from  "../authstyles";
import { Box,Paper, Typography} from '@material-ui/core';
import { Button } from '@material-ui/core';
import { useState } from 'react';
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
            <Grid item xs={11} sm={7} md={5} lg={3}> 
                <Paper className={classes.p}>
                    <Box m="auto">
                        <Typography variant="h4" color="textSecondary" align="center" gutterBottom={true}>Admin Signup</Typography>
                        <form noValidate autoComplete="off" onSubmit={handelsubmit}>
                            <Box component="div" mb={2} mt={7}  >
                                <TextField id="firstname" name="firstname" label="First Name" variant="outlined" className={classes.textstyle} error={logindets.firstname.flag} onChange={(e)=>handelchange(e)} helperText={logindets.firstname.msg} fullWidth={true} />
                            </Box>
                            <Box component="div" mb={2}>
                                <TextField id="lastname" name="lastname" label="Last Name" variant="outlined" className={classes.textstyle} error={logindets.lastname.flag} onChange={(e)=>handelchange(e)} helperText={logindets.lastname.msg} fullWidth={true} />
                            </Box>
                            <Box component="div" mb={2} >
                                <TextField id="email" name="email" label="Email/Phone Number" variant="outlined" className={classes.textstyle} error={logindets.email.flag} onChange={(e)=>handelchange(e)} helperText={logindets.email.msg} fullWidth={true} />
                            </Box>
                            <Box component="div" mb={2} >
                                <TextField id="password" name="password" label="Password" variant="outlined" type="password" className={classes.textstyle} error={logindets.password.flag} onChange={(e)=>handelchange(e)} helperText={logindets.password.msg} fullWidth={true} />
                            </Box>
                            <Box component="div" mb={2} >
                                <TextField id="confirmpwd" name="confirmpwd" label="Confirm Password" variant="outlined" type="password" className={classes.textstyle} error={logindets.confirmpwd.flag} onChange={(e)=>handelchange(e)} helperText={logindets.confirmpwd.msg} fullWidth={true} />
                            </Box>
                            <Box component="div" mb={2} >
                            <Button type="submit" variant="contained" color="primary" fullWidth={true} >SIGN IN</Button>
                            </Box>
                        </form>
                    </Box>
                </Paper>
            </Grid>
        </Grid>
);
}

export default Adminsignup
