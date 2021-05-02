import {makeStyles} from '@material-ui/styles'

const useStyles = makeStyles((theme)=>({
    grow:{
        flexGrow:1,
    },

    avatar:{
        boxShadow:"0px 0px 4px 1px rgba(0,0,0,0.75)",
        marginLeft:"20px",
        '&:hover': {
            boxShadow:"0px 0px 4px 1px rgba(0,0,0,0.75)"
        },
    },

    logo:{
        borderRadius:"50px",
        
    },

    appbar:{
        // boxShadow:"0px 2px 14px 0px rgba(0,0,0,0.75)"
        // background: 'linear-gradient(to left, #076585, #fff);',
        // top:"10px",
        // left:"7px",
        // width:"99%",
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