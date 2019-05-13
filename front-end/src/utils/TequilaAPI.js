var TequilaActionsServer = require('../actions/TequilaActionsServer');
var request = require('superagent');
var gql = require("apollo-boost");
var ApolloClient= require('apollo-boost');

module.exports = {
  get: function(tequila) {
    request.get("http://localhost:3004/results/" + tequila)
      .set('Accept', 'application/json')
      .end(function(err, response) {
        if (err) return console.error(err);
        TequilaActionsServer.receiveTequila(response.body);
      });
  },
  getGql: function(tequila){
    const client = new ApolloClient({
      uri: "http://localhost:8080/graphql"
    });
    /* This Generates query but breaks the code... :(
      client
        .query({
          query: gql`
          {
            fabricantes{
              id
              desc
            }
          }
        `
    })
    .then(result => console.log(result.data));
     */
  } 

};
