import {makeStyles} from '@material-ui/styles'

const useStyles = makeStyles((theme)=>({
    grow:{
        flexGrow:1,
    },

    logo:{
        borderRadius:"50px",
        
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





export {useStyles}