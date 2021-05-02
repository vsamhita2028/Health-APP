import {makeStyles} from '@material-ui/styles'

const useStyles = makeStyles((theme)=>({
    link:{
        textDecoration:"none",
        color: "#3f51b5",
    },
    textstyle:{
        width:"100%",
      },
      btn:{
        borderRadius:20,
        width:"45%"
      },
      maincenter:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height : "80vh",
      },


}))

export {useStyles}