import TequilaActionsServer from '../actions/TequilaActionsServer';
import request from 'superagent';
import { gql } from "apollo-boost";
import ApolloClient from "apollo-boost";
import { createHttpLink } from 'apollo-link-http';
import { setContext } from "apollo-link-context";
import { InMemoryCache } from 'apollo-cache-inmemory';

var kubernetesURL = 'http://192.168.99.113:32620/api/graphql';
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
