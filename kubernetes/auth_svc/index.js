const express = require("express")
const axios = require('axios');
const app = express()

const DEVMODE = true;

if(DEVMODE) {
  process.env.PORT = 8086

  process.env.TEQUILA_SVC_URI = 'http://localhost:8082'
  process.env.PRODUCER_SVC_URI = 'http://localhost:8083'
  process.env.PERSISTENCY_SVC_URI = 'http://localhost:8084'
  process.env.USER_SVC_URI = 'http://localhost:8085'
  process.env.AUTH_SVC_URI = 'http://localhost:8086'

  process.env.TOKEN = 'letmeinpleasekthxbye'
}


// Gets a user given a string that looks like username:password
function loginUser(loginInfo, callback) {
  axios.get(process.env.USER_SVC_URI+'/api/user/login/'+loginInfo)
  .then(function (response) {
    // handle success
    callback(response.data)
  })
  .catch(function (error) {
    // handle error
    callback(error)
  })
}

app.use((req, res) => {

  setTimeout(function () {

// Check if token is valid
  if (req.get('authorization') === process.env.TOKEN) {
    res.json({
      ok: true
    })
  //  next()
  } else {
    // esto del status 401 es lo que hace que la request se rechace.
    // Maybe aqui checar si hay username y pass y si sí, regresar el token.
    let usernameandpassword = req.get('authorization')
    loginUser(usernameandpassword, (result) => {
      console.log(result)
      if (result.username && result.password) {
        // User found! now generate token
        res.status(401).json({
          ok: false,
          yourtoken: '2dfijsdfkjdfkEE45345435'
        })
      } else {
        res.status(401).json({
          ok: false,
        })
      }

    })
    /*
    if (req.get('authorization') === 'usuario:password') {
      res.status(401).json({
        ok: false,
        yourtemptoken: '2dfijsdfkjdfkEE45345435'
      })
    //  next()
    } else {
      res.status(401).json({
        ok: false,
      })
    //  next()
    }
    */
  }

}, 1000);

})

const port = process.env.PORT || 8080

app.listen(port, () => {
  console.log(`auth_svc listening on ${port}`)
})
