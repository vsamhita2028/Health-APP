import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme=>({
    grow:{
      flexGrow:1,
  },

  logo:{
      borderRadius:50,
      
  },
  logotext:{
      fontSize:"16px",
      fontWeight:700,
      color:"#576574"
  },

  link:{
      textDecoration:"none",
      color:"black",
      
  },
}))
export  {useStyles}
