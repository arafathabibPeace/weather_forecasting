import React from "react";
import Header from "../components/Header";
import Content from "../components/Content";
import styles from '../pageStyle.module.css';

const LandingScreen = () => {
    return <div>
        <div className={styles.header}><Header/></div>
        <div className={styles.content}><Content/></div>
    </div>
}

export default LandingScreen