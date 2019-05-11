const express = require("express")
const moment = require("moment")

const app = express()

const DEVMODE = false;

if(DEVMODE) {
  process.env.PORT = 8084

  process.env.TEQUILA_SVC_URI = 'http://localhost:8082'
  process.env.PRODUCER_SVC_URI = 'http://localhost:8083'
  process.env.PERSISTENCY_SVC_URI = 'http://localhost:8084'
  process.env.USER_SVC_URI = 'http://localhost:8085'
  process.env.AUTH_SVC_URI = 'http://localhost:8086'
}

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

const port = process.env.PORT || 8080

app.listen(port, () => {
  console.log(`persistency_svc listening on ${port}`)
})
