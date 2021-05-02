import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    title: {
      flexGrow: 1,
    },
    btn:{
        marginRight : "1.5em",
    },


    root: {
      flexGrow: 1,
    },
    p:{
      padding: "2em"  
    },
    maincenter:{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height : "80vh",
    },
    center : {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "25em"
    },
    textstyle:{
      width: "20em"
    },
    btn:{
      borderRadius:20,
      width:"50%"
    }

  }));
  export  {useStyles}