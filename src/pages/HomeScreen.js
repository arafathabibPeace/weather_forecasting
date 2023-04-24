import React from "react";
import styles from '../pageStyle.module.css';
import Header from "../components/Header";
import Content from "../components/Content";

const HomeScreen = (props) => {

    return <>
        <div className={styles.header}><Header /></div>
        <div className={styles.content}><Content /></div>
    </>
}

export default HomeScreen