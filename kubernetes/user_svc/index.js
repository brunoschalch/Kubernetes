const express = require("express")
const moment = require("moment")
const axios = require('axios')
const app = express()

//const DEVMODE = require('../test/debugging');
const DEVMODE = false;

if(DEVMODE) {
  process.env.PORT = 8085

  process.env.TEQUILA_SVC_URI = 'http://localhost:8082'
  process.env.PRODUCER_SVC_URI = 'http://localhost:8083'
  process.env.PERSISTENCY_SVC_URI = 'http://localhost:8084'
  process.env.USER_SVC_URI = 'http://localhost:8085'
  process.env.AUTH_SVC_URI = 'http://localhost:8086'
}

// USER APIS start
app.get("/api/user/:username", (req, res) => {
  const username = req.params.username
  axios.get(process.env.PERSISTENCY_SVC_URI+'/api/persistency/user/'+username)
  .then(function (response) {
    // handle success
    res.json(response.data)
  })
  .catch(function (error) {
    // handle error
    res.json(error)
  })
})

//usernameandpassword in format username:password
app.get("/api/user/login/:usernameandpassword", (req, res) => {
  const usernameandpassword = req.params.usernameandpassword
  axios.get(process.env.PERSISTENCY_SVC_URI+'/api/persistency/userlogin/'+usernameandpassword)
  .then(function (response) {
    // handle success
    res.json(response.data)
  })
  .catch(function (error) {
    // handle error
    res.json(error)
  })
})

/*
// gets user
app.get("/api/user/:userId", (req, res) => {
  const userId = parseInt(req.params.userId)

  // ¯\_(ツ)_/¯
//  const bump = Math.floor(Math.random() * 10) + 1

//  const expectedDate = moment().add(bump, 'days').toISOString()

  res.json({
    works: "yeahh user"
  })
})
*/

const port = process.env.PORT || 8080

app.listen(port, () => {
  console.log(`user_svc listening on ${port}`)
})
