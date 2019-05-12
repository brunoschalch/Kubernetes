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

function getTequilaById(tequilaId, callback) {
  axios.get(process.env.TEQUILA_SVC_URI+'/api/tequila/'+tequilaId)
  .then(function (response) {
    // handle success
    callback(response.data)
  })
  .catch(function (error) {
    // handle error
    callback(error)
  })
}
// Gets all tequilas in db
function getTequilas(callback) {
  axios.get(process.env.TEQUILA_SVC_URI+'/api/tequilas')
  .then(function (response) {
    // handle success
    callback(response.data)
  })
  .catch(function (error) {
    // handle error
    callback(error)
  })
}
function saveTequila(tequilaToAdd, callback) {
  axios.post(process.env.TEQUILA_SVC_URI+'/api/tequila',
  tequilaToAdd)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
}

function getProducerById(producerId, callback) {
  axios.get(process.env.PRODUCER_SVC_URI+'/api/producer/'+producerId)
  .then(function (response) {
    // handle success
    callback(response.data)
  })
  .catch(function (error) {
    // handle error
    callback(error)
  })
}
// Gets all producers in db
function getProducers(callback) {
  axios.get(process.env.PRODUCER_SVC_URI+'/api/producers')
  .then(function (response) {
    // handle success
    callback(response.data)
  })
  .catch(function (error) {
    // handle error
    callback(error)
  })
}
function saveProducer(producerToAdd, callback) {
  axios.post(process.env.PRODUCER_SVC_URI+'/api/producer',
  producerToAdd)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
}

// Todas las rutas deben empezar con /api/graphql/. Fuera de eso no hay reglas.
app.get("/api/graphql/tequila/:id", async (req, res, next) => {
  try {
    const id = parseInt(req.params.id)

    getTequilaById(id, (response) => {
      res.json(response)
    })

  } catch (error) {
    next(error)
  }

})

port = process.env.PORT || 8080

app.listen(port, () => {
  console.log(`graphql_svc listening on ${port}`)
})
