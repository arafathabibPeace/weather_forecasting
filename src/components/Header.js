import React from "react";
import styles from '../pageStyle.module.css';
import { useDispatch, useSelector } from 'react-redux'
import Logout from "./Logout";

const Header = () => {
    const { user } = useSelector((state) => state.user)
    const isLogOut = Object.keys(user).length === 0 || user.data.error

    return <>
        <div><img src="https://static.vecteezy.com/system/resources/previews/005/502/367/original/solid-cloud-illustration-glyph-icon-free-vector.jpg" className={styles.logo} alt="logo" /></div>
        <div className={styles.title}>Weather Forecast</div>
        {!isLogOut ? <div className={styles.logout}><Logout /></div> : ''}
    </>
}

export default Header