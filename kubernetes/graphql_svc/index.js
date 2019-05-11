const express = require("express")
const axios = require('axios');
const app = express()

const DEVMODE = true;

if(DEVMODE) {
  process.env.PORT = 8080

  process.env.TEQUILA_SVC_URI = 'http://localhost:8082'
  process.env.PRODUCER_SVC_URI = 'http://localhost:8083'
  process.env.PERSISTENCY_SVC_URI = 'http://localhost:8084'
  process.env.USER_SVC_URI = 'http://localhost:8085'
  process.env.AUTH_SVC_URI = 'http://localhost:8086'
}

// Todas las rutas deben empezar con /api/graphql/. Fuera de eso no hay reglas.
app.get("/api/graphql/:id", async (req, res, next) => {
  try {
    const id = parseInt(req.params.id)

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

app.listen(port, () => {
  console.log(`graphql_svc listening on ${port}`)
})
