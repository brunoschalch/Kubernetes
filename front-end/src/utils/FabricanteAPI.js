import { gql } from "apollo-boost";
import ApolloClient from "apollo-boost";
import { createHttpLink } from 'apollo-link-http';
import { setContext } from "apollo-link-context";
import { InMemoryCache } from 'apollo-cache-inmemory'

import TequilaActionsServer from '../actions/TequilaActionsServer';
import request from 'superagent';

/*
module.exports = {
  get: function(fabricante) {
    request.get("http://localhost:3005/results/" + fabricante)
      .set('Accept', 'application/json')
      .end(function(err, response) {
        if (err) return console.error(err);
        TequilaActionsServer.receiveFabricante(response.body);
      });
  }
};
*/

function get(fabricante) {
  request.get("http://localhost:3005/results/" + fabricante)
      .set('Accept', 'application/json')
      .end(function(err, response) {
        if (err) return console.error(err);
        TequilaActionsServer.receiveFabricante(response.body);
      });
}

function getGql(fabricante){
  
  var client = new ApolloClient({
    uri: "http://localhost:8080/graphql",
    headers:{
      
      authorization: 'joe:password' ,
    }
    //link: authLink.concat(httpLink),
    //cache: new InMemoryCache()
  });
  
    client
      .query({
        query: gql`
        {
          fabricante(id : "${fabricante} "){
            id
            desc
            carac
            foto
          }
        }
      `
    })
  .then(result =>  TequilaActionsServer.receiveFabricante(result.data.fabricante));
} 

export  { get, getGql }