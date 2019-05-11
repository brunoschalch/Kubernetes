const express = require("express")
const moment = require("moment")

const app = express()

const DEVMODE = true;

if(DEVMODE) {
  process.env.PORT = 8085

  process.env.TEQUILA_SVC_URI = 'http://localhost:8082'
  process.env.PRODUCER_SVC_URI = 'http://localhost:8083'
  process.env.PERSISTENCY_SVC_URI = 'http://localhost:8084'
  process.env.USER_SVC_URI = 'http://localhost:8085'
  process.env.AUTH_SVC_URI = 'http://localhost:8086'
}

// gets producer
app.get("/api/user/:userId", (req, res) => {
  const userId = parseInt(req.params.userId)

  // ¯\_(ツ)_/¯
//  const bump = Math.floor(Math.random() * 10) + 1

//  const expectedDate = moment().add(bump, 'days').toISOString()

  res.json({
    works: "yeahh user"
  })
})

const port = process.env.PORT || 8080

app.listen(port, () => {
  console.log(`user_svc listening on ${port}`)
})
