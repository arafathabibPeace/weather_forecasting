import * as types from './actionType'
import axios from 'axios'

const loginUser = (user) => ({
    type: types.LOGIN,
    payload: user
})

const logoutUser = (user) => ({
    type: types.LOGOUT,
    payload: user
})
const getUser = (user) => ({
    type: types.GET_USER,
    payload: user
})

const getUserDetails = (details) => ({
    type: types.GET_USER_DETAILS,
    payload: details
})

const getCityDetails = (cityDetails) => ({
    type: types.GET_CITY_DETAILS,
    payload: cityDetails
})

const getForecastDetails = (forecastDetails) => ({
    type: types.GET_FORECAST_DETAILS,
    payload: forecastDetails
})

export const login = () => {
    return function (dispatch) {
        axios.get('https://github.com/login/oauth/authorize?client_id=' + process.env.REACT_APP_CLIENT_ID)
            .then((res) => {
                console.log(res)
                dispatch(loginUser())
            }).catch((err) => {
                console.log(err)
            })

    }
}

export const logout = () => {
    return function (dispatch) {
        dispatch(logoutUser({}))
    }
}

export const loadUser = (codeParam) => {

    return function (dispatch) {
        axios.get('http://localhost:4000/getAccessToken?code=' + codeParam)
            .then((res) => {
                console.log(res.data.access_token)
                dispatch(getUser(res))
            })
            .catch((err) => { console.log(err) })
    }
}

export const loadUserDetails = (accessToken) => {
    console.log('loadUserDetails', accessToken)
    return function (dispatch) {
        axios.get('http://localhost:4000/getUserData', {
            headers: {
                'Authorization': 'Bearer ' + accessToken
            }
        }).then((res) => {
            console.log(res)
            dispatch(getUserDetails(res))
        }).catch((err) => {
            console.log(err)
        })
    }
}

export const loadCityDetails = (city) => {
    console.log(city)
    return function (dispatch) {
        //http://api.openweathermap.org/geo/1.0/direct?q=London&limit=1&appid=eb88d1e478278b816d63666a76e42461
        axios.get('http://api.openweathermap.org/geo/1.0/direct?q=' + city + '&limit=1&appid=' + process.env.REACT_APP_WEATHER_API_KEY)
            .then((res) => {
                console.log(res)
                dispatch(getCityDetails(res))
            })
            .catch((err) => {
                console.log(err)
            })
    }
}

export const loadForecastDetails = (lat, lon) => {
    return function (dispatch) {
        //https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=eb88d1e478278b816d63666a76e42461
        axios.get('https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&appid=' + process.env.REACT_APP_WEATHER_API_KEY)
            .then((res) => {
                dispatch(getForecastDetails(res))
            }).catch((err) => {
                console.log(err)
            })
    }
}



