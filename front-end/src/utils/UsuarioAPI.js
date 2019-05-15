import { gql } from "apollo-boost";
import ApolloClient from "apollo-boost";
import TequilaActionsServer from '../actions/TequilaActionsServer';
import request from 'superagent';

var kubernetesURL = 'http://192.168.99.115:30568/api/graphql';
//var kubernetesURL = 'http://localhost:8080/graphql';

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

export  { getGql }
