const express = require("express")
const moment = require("moment")

const app = express()

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
