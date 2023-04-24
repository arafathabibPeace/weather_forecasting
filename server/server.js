var express = require('express');
var cors = require('cors');
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));


var bodyParser = require('body-parser')
var app = express();
app.use(cors());
app.use(bodyParser.json());

const CLIENT_ID = 'df2c553ef299ed4dfee9'
const CLIENT_SECRET = '7ca893626b01713e72ed1c392b266dee71061855'

app.get('/getAccessToken', async function (req, res) {

    console.log(req.query.code, CLIENT_ID, CLIENT_SECRET)
    const params = '?client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET + '&code=' + req.query.code;
    await fetch('https://github.com/login/oauth/access_token' + params, {
        method: 'POST',
        headers: {
            "Accept": "application/json"
        }
    }).then((response) => {
        return response.json()
    }).then((data) => {
        res.json(data)
    }).catch((err) => {
        console.log('error: ', err)
    })
})

//Access token  is going to be passed in as an Authorization header
app.get('/getUserData', async function (req, res) {
    req.get('Authorization')
    await fetch('https://api.github.com/user', {
        method: 'GET',
        headers: {
            'Authorization': req.get('Authorization')
        }
    }).then((response) => {
        return response.json()
    }).then((data) => {
        res.json(data)
    })
})
app.listen(4000, () => { console.log('CORS running on port 4000') })