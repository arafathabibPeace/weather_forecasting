import React from "react";
import styles from '../pageStyle.module.css';
import CloudIcon from '@mui/icons-material/Cloud';
const Header = () => {
    return <>
        <div><img src="cloud.png" className={styles.logo} alt="logo" /></div>
        <div className={styles.title}>Weather Forecast</div>
    </>
}

export default Header