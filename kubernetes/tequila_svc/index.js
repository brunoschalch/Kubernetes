const express = require("express")
const axios = require('axios')
const app = express()

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
