const express = require("express")
const moment = require("moment")

const app = express()

// gets producer
app.get("/api/producer/:producerId", (req, res) => {
  const producerId = parseInt(req.params.producerId)

  // ¯\_(ツ)_/¯
//  const bump = Math.floor(Math.random() * 10) + 1

//  const expectedDate = moment().add(bump, 'days').toISOString()

  res.json({
    works: "yeahh producer"
  })
})

const port = process.env.PORT || 8080

app.listen(port, () => {
  console.log(`producer_svc listening on ${port}`)
})
