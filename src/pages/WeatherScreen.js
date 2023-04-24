import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { loadForecastDetails } from "../redux/action";
import ResultTable from "../components/ResultTable";
import styles from '../pageStyle.module.css';
const WeatherScreen = (props) => {
    let dispatch = useDispatch()
    const { forecastDetails } = useSelector((state) => state.forecastDetails)
    const [coord, setCoord] = useState({})
    const [main, setMain] = useState({})
    const [system, setSytem] = useState({})
    const [weather, setWeather] = useState({})
    const [wind, setWind] = useState({})


    useEffect(() => {
        if (props.cityDetails?.data[0]?.name) {
            dispatch(loadForecastDetails(props.cityDetails?.data[0]?.lat, props.cityDetails?.data[0]?.lon))
        }
    }, [])

    useEffect(() => {
        setCoord(forecastDetails.data?.coord)
        setMain(forecastDetails.data?.main)
        setSytem(forecastDetails.data?.sys)
        setWeather(forecastDetails.data?.weather[0])
        setWind(forecastDetails.data?.wind)
    }, [forecastDetails])

    return <div className={styles.result}>
        {coord ? <ResultTable result={coord} /> : ''}
        {main ? <ResultTable result={main} /> : ''}
        {system ? <ResultTable result={system} /> : ''}
        {weather ? <ResultTable result={weather} /> : ''}
        {wind ? <ResultTable result={wind} /> : ''}




    </div>
}
export default WeatherScreen