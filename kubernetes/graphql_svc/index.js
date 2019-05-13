const express = require("express");
const graphqlHTTP = require('express-graphql');
var cors = require('cors')
const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  GraphQLSchema
} = require('graphql');

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



// GraphQL Schema

const FabricanteType = new GraphQLObjectType({ // complex type (with fields)
  name: 'Fabricante',
  fields: {
      id: {
          type: new GraphQLNonNull(GraphQLString) 
      },
      desc: {
          type: new GraphQLNonNull(GraphQLString) 
      },
      carac: {
          type: new GraphQLNonNull(GraphQLString) 
      },
      foto: {
          type: new GraphQLNonNull(GraphQLString)
      }
  }
});

const TequilaType = new GraphQLObjectType({ 
  name: 'Tequila',
  fields: {
      id: {
          type: new GraphQLNonNull(GraphQLString) 
      },
      marca: {
          type: new GraphQLNonNull(GraphQLString) 
      },
      submarca: {
          type: new GraphQLNonNull(GraphQLString) 
      },
      desc: {
        type: new GraphQLNonNull(GraphQLString) 
      },
      carac: {
        type: new GraphQLList(GraphQLString) //Should be string Array
      },

      foto: {
          type: new GraphQLNonNull(GraphQLString)
      }
  }
});

const QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
      fabricantes: {
          type: new GraphQLList(FabricanteType), // a list of users
          resolve: async () => {
              var temp = await getProducers();
              return temp;
          }
      },
      fabricante: {
          type: FabricanteType,
          args: {
              id: {
                  type: new GraphQLNonNull(GraphQLString)
              }
          },
          /* in this notation, the resolver function takes the
           * parent object as first parameter, and the arguments
           * as second.
           */
          resolve: (user, args) => { 
              //TODO: return fabricante with id == args.id
              return a;
          }
      },
      tequilas: {
        type: new GraphQLList(TequilaType), // a list of users
        resolve: async () => {
            //TODO: Return a list with all tequilas
            var temp = await getTequilas();
            return temp;
        }
      },
      tequila: {
        type: TequilaType,
        args: {
            id: {
                type: new GraphQLNonNull(GraphQLString)
            }
        },
        /* in this notation, the resolver function takes the
         * parent object as first parameter, and the arguments
         * as second.
         */
        resolve: (user, args) => { 
            //TODO: return Tequila with id == args.id
            return fabricantes.findOneById(args.id);
        }
    },

  }
});

const schema = new GraphQLSchema({
  query: QueryType
});






// Todas las rutas deben empezar con /api/graphql/. Fuera de eso no hay reglas.

/*
app.get("/api/graphql/:id", async (req, res, next) => {
  try {
    //const id = parseInt(req.params.id)
    const id = 23
*/

// Make a request for a user with a given ID
//axios.get(process.env.TEQUILA_SVC_URI+'/api/tequila/'+id)

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
async function getTequilas(callback) {
  var response = await axios.get(process.env.TEQUILA_SVC_URI+'/api/tequilas')
  return response.data;
}
/*
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
*/
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
async function getProducers(callback) {
  var response = await axios.get(process.env.PRODUCER_SVC_URI+'/api/producers')
  return response.data;
}
/*
async function getProducers(callback) {
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
*/
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



app.use('/graphql', cors(),graphqlHTTP({
  schema,
  graphiql: true,
}));


port = process.env.PORT || 8080

app.listen(port, () => {
  console.log(`graphql_svc listening on ${port}`)
})