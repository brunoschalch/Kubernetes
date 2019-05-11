const express = require("express")
const axios = require('axios')
const app = express()

const DEVMODE = false;

if(DEVMODE) {
  process.env.PORT = 8082

  process.env.TEQUILA_SVC_URI = 'http://localhost:8082'
  process.env.PRODUCER_SVC_URI = 'http://localhost:8083'
  process.env.PERSISTENCY_SVC_URI = 'http://localhost:8084'
  process.env.USER_SVC_URI = 'http://localhost:8085'
  process.env.AUTH_SVC_URI = 'http://localhost:8086'
}

app.get("/api/tequila/:tequilaId", (req, res) => {
  const tequilaId = parseInt(req.params.tequilaId)

//  res.json({
//    works: "yeahh tequila service2"
//  })

// Make a request to read or store info!
axios.get(process.env.PERSISTENCY_SVC_URI+'/api/persistency/dbread')
.then(function (response) {
  // handle success
  res.json({
    works: "yeahh tequila service",
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
  console.log(`tequila_svc listening on ${port}`)
})
