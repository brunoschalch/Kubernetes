const express = require("express")
const request = require("request-promise")

const app = express()
/*
const addExpectedDate = async tequila => {
  try {
    const { expectedDate } = await request(`${process.env.TEQUILA_SVC_URI}/api/tequila/${invoice.id}`, {
      json: true
    })
    return Object.assign({}, tequila, { expectedDate })
  } catch (e) {
    console.log(`failed to add expected date ${e}`)
    return invoice
  }
}
*/

app.get("/api/graphql/:id", async (req, res, next) => {
  try {
    const id = parseInt(req.params.id)

// get tequila with id
    const tequila = {test: "hey"}

    var options = {
    uri: `${process.env.TEQUILA_SVC_URI}/api/tequila/${id}`,
    json: true // Automatically parses the JSON string in the response
};


request(options)
    .then(function (result) {
      tequila = result
          res.json(result)
    })
    .catch(function (err) {
        // Crawling failed or Cheerio choked...
        res.json({error: err})
    });
/*
    try {
      tequila = await request(`${process.env.TEQUILA_SVC_URI}/api/tequila/${id}`, {
        json: true
      })
    //  return Object.assign({}, tequila, { expectedDate })
    } catch (e) {
      console.log(`failed to add expected date ${e}`)
  //    return invoice
    }
    */


  } catch (error) {
    next(error)
  }


})

const port = process.env.PORT || 8080

app.listen(port, () => {
  console.log(`graphql_svc listening on ${port}`)
})
