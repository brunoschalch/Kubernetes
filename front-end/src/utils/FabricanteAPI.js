import { gql } from "apollo-boost";
import ApolloClient from "apollo-boost";
import TequilaActionsServer from '../actions/TequilaActionsServer';

var kubernetesURL = 'http://192.168.99.115:30568/api/graphql';
//var kubernetesURL = 'http://localhost:8080/graphql';

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

export  { getGql }
