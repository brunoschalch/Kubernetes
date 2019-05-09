const express = require("express")
const moment = require("moment")

const app = express()

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
