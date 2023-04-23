import React from "react";
import Login from "./Login";
import styles from '../pageStyle.module.css'; 
const Header = () => {
    return <div>
        <div>Welcome to the weather forecast web application. Please Login with your  Github  user  to use the application and view the weather  in your city</div>
        <div className={styles.button}><Login/></div>
    </div>
}

export default Header