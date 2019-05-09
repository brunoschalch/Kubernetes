const express = require("express")
const moment = require("moment")

const app = express()

// gets producer
app.get("/api/persistency/dbop", (req, res) => {
//  const userId = parseInt(req.params.userId)

  // ¯\_(ツ)_/¯
//  const bump = Math.floor(Math.random() * 10) + 1

//  const expectedDate = moment().add(bump, 'days').toISOString()

  res.json({
    works: "yeahh persistency"
  })
})

const port = process.env.PORT || 8080

app.listen(port, () => {
  console.log(`persistency_svc listening on ${port}`)
})
