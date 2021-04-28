import {makeStyles} from '@material-ui/styles'

const useStyles = makeStyles((theme)=>({
    grow:{
        flexGrow:1,
    },

    shadow:{
        boxShadow:"0px 0px 4px 1px rgba(0,0,0,0.75)"
    },

    logo:{
        borderRadius:"50px",
        
    },

    appbar:{
        // boxShadow:"0px 2px 14px 0px rgba(0,0,0,0.75)"
    },

    logotext:{
        fontSize:"16px",
        fontWeight:700,
        color:"#576574"
    },

    link:{
        textDecoration:"none",
    },

    linktext:{
        fontWeight:500,
        fontSize:"15px",
        color:"black",
    },
    user:{
        fontWeight:600,
        // color:"white"
    },

    menuitem:{
        borderRadius:"3px",
        '&:hover': {
            backgroundColor:"#efefef",

        },
    },


    linkactive:{

    },
}))





export {useStyles}