import { gql } from "apollo-boost";
import ApolloClient from "apollo-boost";
import TequilaActionsServer from '../actions/TequilaActionsServer';
import request from 'superagent';

var kubernetesURL = 'http://192.168.99.113:32620/api/graphql';
//var kubernetesURL = 'http://localhost:8080/graphql';

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
    uri: kubernetesURL,
    headers:{


      authorization: localStorage.getItem('token') ,

    }
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
