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


/*
var fabricantes = [
     {
        "id":"Don Julio",
        "desc":"En 1942222, la pasión por el tequila impulsó a nuestro fundador Don Julio González a mejorar cada aspecto de este tequila —desde la cosecha hasta el embotellado— para elaborar el tequila más prestigioso del mundo. Hecho 100% de Blue Weber Agave.",
        "carac":"Guiado por su pasión, Don Julio González se inspiró para producir el tequila más fino revolucionando todo el proceso: desde la plantación y cosecha del agavetequilana Weber Variedad Azul hasta la forma de la botella.",
        "foto":"https://www.donjulio.com/images/home_tequila_bottle.jpg"
     },
     {
        "id":"Cazadores",
        "desc":"En 1922, en Arandas, México, Don José María Bañuelos se asomó a su ventana y contempló las colinas plagadas de agave azul. Lo que vio, entre la arcilla roja y el agave azul, fue un ciervo, valientemente parado en medio del campo.",
        "carac":"Se dice que después de que Don José perfeccionara su nuevo tequila Cazadores, ocultó la receta entre las paredes de su casa, salvaguardándola como su posesión más preciada. Durante 51 años, Cazadores ha permanecido como un secreto de familia.",
        "foto":"https://d1oqiickzzpl3c.cloudfront.net/wp-content/uploads/2017/07/09120315/Painted-Wall-min-1.jpg"
     },
     {
        "id":"Corralejo",
        "desc":"En la tierra donde nació el cura Hidalgo se encuentra Tequilera Corralejo, ubicada en una bella Hacienda bajo el mismo nombre que se localiza en el municipio de Pénjamo, Guanajuato.",
        "carac":"El tour en la Hacienda Corralejo se inicia después de leer un letrero que da la bienvenida y refleja la calidad humana de la empresa ofreciendo al visitante satisfacer su curiosidad y expectación acerca de los procesos que se siguen para obtener el tequila.",
        "foto":"https://tequilacorralejo.mx/assets/base/img/home/slider/slider-corralejo-1.png"
     }
  ]
*/

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
              var a = await getProducers();
              return a;
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
              return fabricantes.findOneById(args.id);
          }
      },
      tequilas: {
        type: new GraphQLList(TequilaType), // a list of users
        resolve: () => {
            //TODO: Return a list with all tequilas
            
            return this.getTequila();
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