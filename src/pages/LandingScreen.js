import React from "react";
import Header from "../components/Header";
import Content from "../components/Content";
import styles from '../pageStyle.module.css';
import { useDispatch, useSelector } from 'react-redux'
import HomeScreen from "./HomeScreen";

const LandingScreen = () => {
    const { user } = useSelector((state) => state.user)

    return <div>
        <div className={styles.header}><Header /></div>
        <div className={styles.content}><Content /></div>
    </div>
}

export default LandingScreen