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
      
      authorization: localStorage.getItem('token'),

    }

  });

    client
      .query({
        query: gql`
        {
          usuario(username: "${usuario}"){
            username
            tequilas{
              id
              f_compra
              marca
              desc
            }

          }

        }
      `
    })
  .then(result => TequilaActionsServer.receiveUsuario(result.data.usuario.tequilas) );
}

export  { get, getGql }
