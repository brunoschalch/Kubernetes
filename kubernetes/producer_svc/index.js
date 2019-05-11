const express = require("express")
const axios = require('axios')
const app = express()

const DEVMODE = true;

if(DEVMODE) {
  process.env.PORT = 8083

  process.env.TEQUILA_SVC_URI = 'http://localhost:8082'
  process.env.PRODUCER_SVC_URI = 'http://localhost:8083'
  process.env.PERSISTENCY_SVC_URI = 'http://localhost:8084'
  process.env.USER_SVC_URI = 'http://localhost:8085'
  process.env.AUTH_SVC_URI = 'http://localhost:8086'
}

// gets producer
app.get("/api/producer/:producerId", (req, res) => {
  const producerId = parseInt(req.params.producerId)

  // Make a request to read or store info!
  axios.get(process.env.PERSISTENCY_SVC_URI+'/api/persistency/dbread')
  .then(function (response) {
    // handle success
    res.json({
      works: "yeahh producer",
      responseFromPersistency: response.data
    })
  })
  .catch(function (error) {
    // handle error
    res.json(error)
  })


})

const port = process.env.PORT || 8080

app.listen(port, () => {
  console.log(`producer_svc listening on ${port}`)
})
