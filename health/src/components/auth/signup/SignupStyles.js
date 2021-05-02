import {makeStyles} from '@material-ui/styles'

const useStyles = makeStyles((theme)=>({
    link:{
        textDecoration:"none",
        color: "#3f51b5",
    },
    textstyle:{
        width:"100%"
      },
      btn:{
        borderRadius:20,
        width:"50%"
      },
      maincenter:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height : "80vh",
      },
    //samhitha's



      center : {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "25em"
      },



}))

export {useStyles}