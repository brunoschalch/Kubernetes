import { gql } from "apollo-boost";
import ApolloClient from "apollo-boost";

var kubernetesURL = 'http://192.168.99.115:30568/api/graphql';
//var kubernetesURL = 'http://localhost:8080/graphql';

const client = new ApolloClient({
  uri: kubernetesURL,
  headers:{
    authorization: localStorage.getItem('token') ,
  }
});

client
  .query({
    query: gql`
      {
        fabricantes{
          id
          desc

        }
      }
    `
  })
  .then(/*result => console.log(result.data)*/);
