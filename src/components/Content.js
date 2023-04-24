import React, { useEffect, useState } from "react";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Login from "./Login";
import styles from '../pageStyle.module.css';
import { useDispatch, useSelector } from 'react-redux'
import { loadCityDetails, loadForecastDetails } from "../redux/action";
import WeatherForecastResult from '../pages/WeatherScreen'
import Search from "./Search";
const Content = () => {
    const { user } = useSelector((state) => state.user)
    const { userDetails } = useSelector((state) => state.userDetails)
    const { cityDetails } = useSelector((state) => state.cityDetails)
    const isLogOut = Object.keys(user).length === 0 || user.data?.error

    return <div>

        {isLogOut ? <>
            <div>Welcome to the weather forecast web application. Please Login with your  Github  user  to use the application and view the weather  in your city</div>
            <div className={styles.button}><Login /></div>
        </> : <><div className={styles.user}><div className={styles.user_name}>{userDetails.data?.name}</div><div className={styles.user_htmlUrl}>{userDetails.data?.html_url}</div></div>
            <div className={styles.searchbar}>
                <Search />
            </div>
            <div className={styles.forecast}>
                {cityDetails ? <WeatherForecastResult cityDetails={cityDetails} /> : ''}
            </div>
        </>
        }

    </div>
}

export default Content