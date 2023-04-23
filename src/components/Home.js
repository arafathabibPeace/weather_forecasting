import React, { useEffect, useState } from "react";
import Login from "./Login";
import Logout from "./Logout";

const Home = () => {
    const [rerender, setRerender] = useState(false)
    const [accessToken, setAccessToken] = useState('')

    useEffect(() => {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString)
        const codeParam = urlParams.get('code')
        console.log(codeParam);

        if (codeParam && accessToken === '') {
            async function getAccessToken() {
                await fetch('http://localhost:4000/getAccessToken?code=' + codeParam, {
                    method: 'GET'
                }).then((response) => {
                    console.log(response)
                    return response.json()
                }).then((data) => {
                    console.log('data: ', data)
                    if (data.access_token) {
                        setAccessToken(data.access_token)

                        setRerender(!rerender)
                    }
                }).catch((error) => {
                    console.log('error: ', error)
                })
            }
            getAccessToken()

        }
    })

    useEffect(() => {
        getUserData(accessToken)
    }, [getUserData, accessToken])

    async function getUserData() {
        await fetch('http://localhost:4000/getUserData', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + accessToken
            }
        }).then((response) => {
            return response.json();
        }).then((data) => {
            console.log(data)
        })
    }
    return <div>
        <div>Weather Forecast</div>

        <div>Welcome to the weather forecast web application. Please Login with your  Github  user  to use the application and view the weather  in your city</div>
        {accessToken ? <Logout /> : <Login />}
    </div>

}

export default Home