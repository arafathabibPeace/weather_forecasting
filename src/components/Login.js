import { Button } from '@mui/material';
import React, { useState } from 'react';


const LoginPage = () => {

    const loginToGithub = () => {
        window.location.assign('https://github.com/login/oauth/authorize?client_id='+process.env.REACT_APP_CLIENT_ID);
    }
    return <div>
        <Button variant="contained" onClick={loginToGithub}>Login</Button>
    </div>

}


export default LoginPage

