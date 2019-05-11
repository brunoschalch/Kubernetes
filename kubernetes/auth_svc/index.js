const express = require("express")

const app = express()

const DEVMODE = false;

if(DEVMODE) {
  process.env.PORT = 8086

  process.env.TEQUILA_SVC_URI = 'http://localhost:8082'
  process.env.PRODUCER_SVC_URI = 'http://localhost:8083'
  process.env.PERSISTENCY_SVC_URI = 'http://localhost:8084'
  process.env.USER_SVC_URI = 'http://localhost:8085'
  process.env.AUTH_SVC_URI = 'http://localhost:8086'

  process.env.TOKEN = 'letmeinpleasekthxbye'
}

app.use((req, res) => {

  setTimeout(function () {

  if (req.get('authorization') === process.env.TOKEN) {
    res.json({
      ok: true
    })
  //  next()
  } else {
    // esto del status 401 es lo que hace que la request se rechace.
    // Maybe aqui checar si hay username y pass y si sí, regresar el token.
    if (req.get('authorization') === 'usuario:password') {
      res.status(401).json({
        ok: false,
        yourtemptoken: '2dfijsdfkjdfkEE45345435'
      })
    //  next()
    } else {
      res.status(401).json({
        ok: false,
      })
    //  next()
    }
  }

}, 1000);

})

const port = process.env.PORT || 8080

app.listen(port, () => {
  console.log(`auth_svc listening on ${port}`)
})
