import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box, } from "@material-ui/core";

const useStyles = makeStyles ({
    Error: {
        color: "tomato",
        textAlign: "center",           
        marginTop: "12rem"        
    } 
});

const NotFoundPage = () => {
    const classes = useStyles();
    return (
    <>
        <Box className={classes.Error}  component="div" >            
            <Typography  style={{fontSize: "5rem"}}>
                Error: 404 Page Not Found
            </Typography>            
        </Box>
    </>
);

};
export default NotFoundPage;