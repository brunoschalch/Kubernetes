import TequilaActionsServer from '../actions/TequilaActionsServer';
import { gql } from "apollo-boost";
import ApolloClient from "apollo-boost";

var kubernetesURL = 'http://192.168.99.115:30568/api/graphql';
//var kubernetesURL = 'http://localhost:8080/graphql';

function getGql(tequila){
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

export  { getGql }
