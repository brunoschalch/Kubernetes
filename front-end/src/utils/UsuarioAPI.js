import { gql } from "apollo-boost";
import ApolloClient from "apollo-boost";
import TequilaActionsServer from '../actions/TequilaActionsServer';
import request from 'superagent';

var kubernetesURL = 'http://192.168.99.113:32620/api/graphql';
//var kubernetesURL = 'http://localhost:8080/graphql';

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
    uri: kubernetesURL,
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
