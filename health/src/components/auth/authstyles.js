import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    title: {
      flexGrow: 1,
    },
    btn:{
        marginRight : "1.5em",
    },

    link:{
        textDecoration:"none",
        color:"black"
    },
    root: {
      flexGrow: 1,
    },
    maincenter:{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height : "80vh"
    },
    center : {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "25em"
    },
    textstyle:{
      width: "20em"
    }


  }));
  export  {useStyles}