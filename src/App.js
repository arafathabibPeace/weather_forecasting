import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LandingScreen from './pages/LandingScreen'
import HomeScreen from './pages/HomeScreen'
import WeatherScreen from './pages/WeatherScreen'
import NoPageScreen from './pages/NoPageScreen'
import { useDispatch, useSelector } from 'react-redux'
import { loadUser, loadUserDetails } from "./redux/action";
import Layout from './components/Layout'

function App() {
  let dispatch = useDispatch()
  const { user } = useSelector((state) => state.user)
  const { userDetails } = useSelector((state) => state.userDetails)
  const isLogout = Object.keys(user).length === 0 || user.data?.error

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString)
    const codeParam = urlParams.get('code')
    console.log('codeParam: ', codeParam);

    if (codeParam && isLogout) {
      dispatch(loadUser(codeParam))
    }
  }, [])

  useEffect(() => {
    dispatch(loadUserDetails(user.data?.access_token))
  }, [user])

  console.log(userDetails)

  const displayScreen = () => {
    if (isLogout) {
      return <LandingScreen />
    } else {
      return <HomeScreen />
    }

  }

  return (
    <div className="App">
      {displayScreen()}

      {/* <Layout/> */}

    </div>
  );
}

export default App;
