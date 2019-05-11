const express = require("express")
const axios = require('axios');
const app = express()

const DEBUG = false;

app.get("/api/graphql/:id", async (req, res, next) => {
  try {
    const id = parseInt(req.params.id)

    if(DEBUG) {
      process.env.TEQUILA_SVC_URI = 'http://localhost:8080'
    }


// Make a request for a user with a given ID
axios.get(process.env.TEQUILA_SVC_URI+'/api/tequila/'+id)
  .then(function (response) {
    // handle success
    console.log(response);
    res.json(response.data)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
    res.json(error)
  })

  } catch (error) {
    next(error)
  }

})

port = process.env.PORT || 8080

if (DEBUG) {
  port = 8081
}

app.listen(port, () => {
  console.log(`graphql_svc listening on ${port}`)
})
