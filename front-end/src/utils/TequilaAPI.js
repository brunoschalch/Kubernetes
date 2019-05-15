import TequilaActionsServer from '../actions/TequilaActionsServer';
import request from 'superagent';
import { gql } from "apollo-boost";
import ApolloClient from "apollo-boost";
import { createHttpLink } from 'apollo-link-http';
import { setContext } from "apollo-link-context";
import { InMemoryCache } from 'apollo-cache-inmemory';

function get(tequila) {
  request.get("http://localhost:3004/results/" + tequila)
    .set('Accept', 'application/json')
    .end(function(err, response) {
      if (err) return console.error(err);
      TequilaActionsServer.receiveTequila(response.body);
    });
}

function getGql(tequila){
  var client = new ApolloClient({
    uri: "http://localhost:8080/graphql",
    headers:{
      
      authorization: localStorage.getItem('token') ,

    }
    //link: authLink.concat(httpLink),
    //cache: new InMemoryCache()
  });

    client
      .query({
        query: gql`
        {
          tequila(id : "${tequila} "){
            id
            marca
            submarca
            desc
            carac
            foto
          }
        }
      `
    })
  .then(result =>  TequilaActionsServer.receiveTequila(result.data.tequila));
}

export  { get, getGql }
