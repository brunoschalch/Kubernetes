const express = require("express")
const axios = require('axios')
var jwt    = require('jsonwebtoken') // used to create, sign, and verify tokens
var cors = require('cors')
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

app.use(cors(), (req, res) => {

  let token = req.get('authorization')
// Check if token is valid
jwt.verify(token, 'superSecretBSG', function(err, decoded) {
      if (err) {
            // Maybe aqui checar si hay username y pass y si sí, regresar el token.
            let usernameandpassword = req.get('authorization')
            loginUser(usernameandpassword, (result) => {
              console.log(result)
              if (result.username && result.password) {
                // User found! now generate token
                var token = jwt.sign(result, 'superSecretBSG', {
                  expiresIn: 60*60*12// expires in 12 hours
                });

                res.status(401).json({
                  ok: false,
                  yourtoken: token
                })
              } else {
                res.status(401).json({
                  ok: false,
                })
              }

            })

          }  else {
        // if everything is good, save to request for use in other routes
        console.log("Everything good with token, this info was inside (added to req.decoded):");
        console.log(decoded);
        req.decoded = decoded;
        //important code for embassador to accept everything!
        res.json({
          ok: true
        })
      }
    });



})

const port = process.env.PORT || 8080

app.listen(port, () => {
  console.log(`auth_svc listening on ${port}`)
})
