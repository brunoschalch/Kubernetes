import { gql } from "apollo-boost";
import ApolloClient from "apollo-boost";
import TequilaActionsServer from '../actions/TequilaActionsServer';
import request from 'superagent';

function get(usuario) {
  request.get("http://localhost:3006/" + usuario)
      .set('Accept', 'application/json')
      .end(function(err, response) {
        if (err) return console.error(err);
        TequilaActionsServer.receiveUsuario(response.body);
      });
}

function getGql(usuario){
  
  var client = new ApolloClient({
    uri: "http://localhost:8080/graphql",
    headers:{
      
      authorization: 'joe:password' ,
    }

  });
  
    client
      .query({
        query: gql`
        {
          fabricante(id : "${usuario} "){
            id
            desc
            carac
            foto
          }
        }
      `
    })
  .then(result =>  TequilaActionsServer.receiveFabricante(result.data.usuario));
} 

export  { get, getGql }

/*
module.exports = {
  get: function(usuario) {
    request.get("http://localhost:3006/" + usuario)
      .set('Accept', 'application/json')
      .end(function(err, response) {
        if (err) return console.error(err);
        TequilaActionsServer.receiveUsuario(response.body);
      });
  }
};
*/