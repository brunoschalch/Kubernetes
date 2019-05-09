const express = require("express")
const moment = require("moment")

const app = express()

app.get("/api/tequila/:tequilaId", (req, res) => {
  const tequilaId = parseInt(req.params.tequilaId)

  // ¯\_(ツ)_/¯
//  const bump = Math.floor(Math.random() * 10) + 1

//  const expectedDate = moment().add(bump, 'days').toISOString()

  res.json({
    works: "yeahh"
  })
})

const port = process.env.PORT || 8080

app.listen(port, () => {
  console.log(`tequila_svc listening on ${port}`)
})
