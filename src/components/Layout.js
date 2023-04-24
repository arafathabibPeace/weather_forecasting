import React from 'react'
import { BrowserRouter, Routes, Route, Router } from "react-router-dom"
import LandingScreen from '../pages/LandingScreen'
import HomeScreen from '../pages/HomeScreen'
import WeatherScreen from '../pages/WeatherScreen'
import NoPageScreen from '../pages/NoPageScreen'

const Layout = () => {
    return <>
        <BrowserRouter>
            <Routes>
                <Route  path="/" element={<LandingScreen />} />
                <Route  path="/home" element={<HomeScreen />} />
                <Route  path="/weather" element={<WeatherScreen />} />
            </Routes>
        </BrowserRouter>
    </>
}
export default Layout