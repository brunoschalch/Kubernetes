const express = require("express")
const axios = require('axios')
const app = express()

// gets producer
app.get("/api/producer/:producerId", (req, res) => {
  const producerId = parseInt(req.params.producerId)

  // Make a request to read or store info!
  axios.get(process.env.PERSISTENCY_SVC_URI+'/api/persistency/dbread'+id)
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
