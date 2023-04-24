import { Button } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { Link} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { login } from "../redux/action";

const Login = () => {
    let dispatch = useDispatch()
    const { user } = useSelector((state) => state.user)
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString)
    const codeParam = urlParams.get('code')

    const loginToGithub = () => {       
        window.location.assign('https://github.com/login/oauth/authorize?client_id=' + process.env.REACT_APP_CLIENT_ID);
    }


    return <div>
        <Button variant="contained" onClick={loginToGithub}>Login</Button>
    </div>

}


export default Login

