import React from "react"
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const Homepage = (props) => {
    // console.log(props.details)
    return (
        <Box 
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh">
        <div className="homepage">
            <h1>Welcome {props.details.user.name} !!!</h1>
            {/* <button className="button" onClick={() => props.details.setLoginUser({})} >Logout</button> */}
            <Button variant="contained" color="primary" onClick={() => props.details.setLoginUser({})} >
                Logout
            </Button>
        </div>
        </Box>
    )
}

export default Homepage