const express = require("express")
const moment = require("moment")
var bodyParser = require("body-parser")

const app = express()


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const DEVMODE = require('../test/debugging');

if(DEVMODE) {
  process.env.PORT = 8084

  process.env.TEQUILA_SVC_URI = 'http://localhost:8082'
  process.env.PRODUCER_SVC_URI = 'http://localhost:8083'
  process.env.PERSISTENCY_SVC_URI = 'http://localhost:8084'
  process.env.USER_SVC_URI = 'http://localhost:8085'
  process.env.AUTH_SVC_URI = 'http://localhost:8086'
}


TequilaJSON = {
   "results": [
     {
       "id": "101",
       "marca": "Don Julio",
       "submarca": "Tequila Blanco",
       "desc": "Con la planta de agave azul más fina y el tradicional proceso de destilación, el Tequila Don Julio® Blanco es la expresión más pura del verdadero tequila.",
       "carac": [
         "Agave puro no añejado /doble-destilado",
         "Agave fresco combinado con notas cítricas de limón, lima y pomelo",
         "Suave y dulce sabor a agave",
         "Limpio y seco con leves matices de pimienta negra y hierbas",
         "En combinación con otras bebidas"
       ],
       "foto": "https://www.donjulio.com/images/portfolio/blanco.png"
     },
     {
       "id": "102",
       "marca": "Don Julio",
       "submarca": "Reposado",
       "desc": "Añejado en barricas de roble blanco americano durante ocho meses, el Tequila Don Julio® Reposado es de color ámbar dorado y ofrece una nota final intensa y suave, la esencia pura del perfecto tequila añejado en barrica.",
       "carac": [
         "8 meses(4x industria estándar)",
         "Un aroma que invita con suaves notas de limón y capas especiadas con un toque de frutas maduras",
         "Increíblemente suave y con tonos elegantes de chocolate negro, vainilla y canela suave",
         "Sedoso y cálido con esencias de frutas secas, nueces y un toque de manzana caramelizada.",
         "Solo"
       ],
       "foto": "https://www.donjulio.com/images/portfolio/reposado.png"
     },
     {
       "id": "103",
       "marca": "Don Julio",
       "submarca": "70 Añejo Cristalino",
       "desc": "Don Julio 70 Añejo Cristalino es la culminación de 70 años de conocimiento, experiencia e innovación. Contiene la suavidad de un Blanco y la complejidad de un Añejo en una combinación perfecta para ofrecer una experiencia de tequila única",
       "carac": [
         "18 meses & filtrado con carbón",
         "Fresco con toques tradicionales del Añejo.",
         "Suave en esencia, con toques de vainilla, miel y roble tostado",
         "Notas perdurables de roble seguidas por un final limpio y cálido.",
         "En las rocas"
       ],
       "foto": "https://www.donjulio.com/images/portfolio/julio70.png"
     },
     {
       "id": "104",
       "marca": "Cazadores",
       "submarca": "Tequila Blanco",
       "desc": "El tequila en su forma más pura, sin añejar, intenso y con el sabor real del agave. Las frutas cítricas, las hierbas aromáticas y el tradicional acabado suave, convierten el Tequila CAZADORES® Blanco en el tequila para cocteles y “caballito”",
       "carac": [
         "Desde 1922",
         "100% Agave",
         "100% de Arandas"
       ],
       "foto": "https://www.cazadores.com/mx/es/wp-content/themes/bacardi-cazadores/dist/images/blanco-nav-icon.png"
     },
     {
       "id": "105",
       "marca": "Cazadores",
       "submarca": "Reposado",
       "desc": "El Tequila CAZADORES® Reposado original se mantiene hasta un año en barricas nuevas de roble americano, creando un equilibrio perfecto entre el agave y los sabores amaderados.",
       "carac": [
         "Desde 1922",
         "100% Agave",
         "100% de Arandas"
       ],
       "foto": "https://www.cazadores.com/mx/es/wp-content/themes/bacardi-cazadores/dist/images/resposado-nav-icon.png"
     },
     {
       "id": "106",
       "marca": "Cazadores",
       "submarca": "70 Añejo Cristalino",
       "desc": "Cazadores Añejo Cristalino debe su brillantez y transparencia a su proceso de filtración lento y cuidadoso donde se remueve el color y se conservan las características de un tequila añejo.",
       "carac": [
         "Desde 1922",
         "100% Agave",
         "100% de Arandas"
       ],
       "foto": "https://www.cazadores.com/mx/es/wp-content/themes/bacardi-cazadores/dist/images/extra-anejo-cristalino-nav-icon.png"
     },
     {
       "id": "107",
       "marca": "Corralejo",
       "submarca": "Triple Destilado",
       "desc": "Tequila 100% de agave reposado, único producto de la familia Corralejo que se obtiene de la triple destilación de los mostos fermentados del agave azul Tequilana Weber, lo que lo hace ser un producto de gran pureza y excelente calidad.",
       "carac": [
         "Amarillo paja con matices dorados.",
         "Evoca aromas suaves y dulces, con notas equilibradas de agave cocido y tonos afrutados.",
         "Suavidad y frescura es lo que denota este tequila con sus notas frutales.",
         "38% alc. Vol."
       ],
       "foto": "https://tequilacorralejo.mx/assets/base/img/productos/tequila-corralejo-triple-destilado/360/small/01.jpg"
     },
     {
       "id": "108",
       "marca": "Corralejo",
       "submarca": "Reposado",
       "desc": "Tequila 100% de agave con 18 meses de maduración en barricas de roble americano, lo que le ha conferido una fusión exquisita entre sabores refrescantes combinados con suaves sabores a madera.",
       "carac": [
         "Ámbar con matices a ocre.",
         "Notas a chocolate, vainilla y almendras con aromas intensos a roble.",
         "Increíblemente suave y con tonos elegantes de chocolate negro, vainilla y canela suave",
         "Tequila sedoso y de gran cuerpo que ofrece al paladar notas intensas de madera y chocolate, logrando confirmar los exquisitos aromas de este tequila.",
         "38% alc. Vol."
       ],
       "foto": "https://tequilacorralejo.mx/assets/base/img/productos/tequila-anejo-99000-horas/360/small/1.jpg"
     },
     {
       "id": "109",
       "marca": "Corralejo",
       "submarca": "Añejo Gran Corralejo",
       "desc": "Tequila 100% de agave, añejado durante 2 años en barricas de roble americano, un producto de gran excelencia que debe paladearse lentamente.",
       "carac": [
         "Ocre con destellos de gran intensidad.",
         "Intensos tonos amaderados combinados con notas de chocolate, vainilla y nuez.",
         "Sedoso y de tonos dulces que finalizan con un persistente sabor a madera en el paladar.",
         "38% alc. Vol."
       ],
       "foto": "https://tequilacorralejo.mx/assets/base/img/productos/tequila-anejo-gran-corralejo/360/small/01.jpg"
     }
   ]
}

UsuarioJSON = [
  {
  "username": "joe",
  "password": "password",
   "tequilas": [
     {
       "id": "101",
       "f_compra": "30-04-2019",
       "marca": "Don Julio",
       "desc": "Con la planta de agave azul más fina y el tradicional proceso de destilación, el Tequila Don Julio® Blanco es la expresión más pura del verdadero tequila."
     },
     {
       "id": "102",
       "f_compra": "20-04-2019",
       "marca": "Don Julio",
       "desc": "Añejado en barricas de roble blanco americano durante ocho meses, el Tequila Don Julio® Reposado es de color ámbar dorado y ofrece una nota final intensa y suave, la esencia pura del perfecto tequila añejado en barrica."
     },
     {
       "id": "103",
       "f_compra": "30-04-2019",
       "marca": "Don Julio",
       "desc": "Don Julio 70 Añejo Cristalino es la culminación de 70 años de conocimiento, experiencia e innovación. Contiene la suavidad de un Blanco y la complejidad de un Añejo en una combinación perfecta para ofrecer una experiencia de tequila única"
     },
     {
       "id": "104",
       "f_compra": "30-04-2019",
       "marca": "Cazadores",
       "desc": "El tequila en su forma más pura, sin añejar, intenso y con el sabor real del agave. Las frutas cítricas, las hierbas aromáticas y el tradicional acabado suave, convierten el Tequila CAZADORES® Blanco en el tequila para cocteles y “caballito”"
     },
     {
       "id": "105",
       "f_compra": "20-04-2019",
       "marca": "Cazadores",
       "desc": "El Tequila CAZADORES® Reposado original se mantiene hasta un año en barricas nuevas de roble americano, creando un equilibrio perfecto entre el agave y los sabores amaderados."
     },
     {
       "id": "106",
       "f_compra": "30-04-2019",
       "marca": "Cazadores",
       "desc": "Cazadores Añejo Cristalino debe su brillantez y transparencia a su proceso de filtración lento y cuidadoso donde se remueve el color y se conservan las características de un tequila añejo."
     },
     {
       "id": "107",
       "f_compra": "30-04-2019",
       "marca": "Corralejo",
       "desc": "Tequila 100% de agave reposado, único producto de la familia Corralejo que se obtiene de la triple destilación de los mostos fermentados del agave azul Tequilana Weber, lo que lo hace ser un producto de gran pureza y excelente calidad."
     },
     {
       "id": "108",
       "f_compra": "20-04-2019",
       "marca": "Corralejo",
       "desc": "Tequila 100% de agave con 18 meses de maduración en barricas de roble americano, lo que le ha conferido una fusión exquisita entre sabores refrescantes combinados con suaves sabores a madera."
     },
     {
       "id": "109",
       "f_compra": "30-04-2019",
       "marca": "Corralejo",
       "desc": "Tequila 100% de agave, añejado durante 2 años en barricas de roble americano, un producto de gran excelencia que debe paladearse lentamente."
     }
   ]
},
{
"username": "bob",
"password": "password",
 "tequilas": [
   {
     "id": "107",
     "f_compra": "30-04-2019",
     "marca": "Corralejo",
     "desc": "Tequila 100% de agave reposado, único producto de la familia Corralejo que se obtiene de la triple destilación de los mostos fermentados del agave azul Tequilana Weber, lo que lo hace ser un producto de gran pureza y excelente calidad."
   },
   {
     "id": "108",
     "f_compra": "20-04-2019",
     "marca": "Corralejo",
     "desc": "Tequila 100% de agave con 18 meses de maduración en barricas de roble americano, lo que le ha conferido una fusión exquisita entre sabores refrescantes combinados con suaves sabores a madera."
   },
   {
     "id": "109",
     "f_compra": "30-04-2019",
     "marca": "Corralejo",
     "desc": "Tequila 100% de agave, añejado durante 2 años en barricas de roble americano, un producto de gran excelencia que debe paladearse lentamente."
   }
 ]
}
]

FabricanteJSON = {
   "results":[
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
}


// TEQUILA APIS start
app.get("/api/persistency/tequila/:tequilaId", (req, res) => {
  const tequilaId = req.params.tequilaId
  for (var i = 0; i< TequilaJSON.results.length; i++) {
    let tequila = TequilaJSON.results[i];
    if (tequila.id === tequilaId) {
      res.json(tequila)
    }
  }
  res.json({
    persistency_error: 'tequila with id '+ tequilaId + ' not found.'
  })
})

app.get("/api/persistency/tequilas", (req, res) => {
  res.json(TequilaJSON.results)
})

app.post('/api/persistency/tequila', (req, res) => {
  var tequilaToAdd = JSON.parse(req.body.tequilaToAdd)
  TequilaJSON.results.push(tequilaToAdd);
  res.json({success: true, message: 'tequila added', tequila: tequilaToAdd})
});

// PRODUCER APIS start
app.get("/api/persistency/producer/:producerId", (req, res) => {
  const producerId = req.params.producerId
  for (var i = 0; i< FabricanteJSON.results.length; i++) {
    let producer = FabricanteJSON.results[i];
    if (producer.id === producerId) {
      res.json(producer)
    }
  }
  res.json({
    persistency_error: 'producer with id '+ producerId + ' not found.'
  })
})

app.get("/api/persistency/producers", (req, res) => {
  res.json(FabricanteJSON.results)
})

app.post('/api/persistency/producer', (req, res) => {
  var producerToAdd = JSON.parse(req.body.producerToAdd)
  FabricanteJSON.results.push(producerToAdd);
  res.json({success: true, message: 'producer added', producer: producerToAdd})
});

// USER APIS start
app.get("/api/persistency/user/:username", (req, res) => {
  const username = req.params.username
  for (var i = 0; i < UsuarioJSON.length; i++) {
    let user = UsuarioJSON[i];
    if (user.username === username) {
      res.json(user)
    }
  }
  res.json({
    persistency_error: 'user with username '+ username + ' not found.'
  })
})

//usernameandpassword in format username:password
app.get("/api/persistency/userlogin/:usernameandpassword", (req, res) => {
  const usernameandpassword = req.params.usernameandpassword
  const username = usernameandpassword.split(':')[0]
  const password = usernameandpassword.split(':')[1]
  for (var i = 0; i < UsuarioJSON.length; i++) {
    let user = UsuarioJSON[i];
    if (user.username === username && user.password === password) {
      res.json(user)
    }
  }
  res.json({
    success: false,
    persistency_error: 'user with username:password: '+ usernameandpassword + ' not found.'
  })
})


/*
// gets info specified in params
app.get("/api/persistency/dbread", (req, res) => {
//  const userId = parseInt(req.params.userId)

  res.json({
    persistency_read: {
      name: "herradura",
      proucerID: "02334d",
    }
  })
})
*/

const port = process.env.PORT || 8080

app.listen(port, () => {
  console.log(`persistency_svc listening on ${port}`)
})
