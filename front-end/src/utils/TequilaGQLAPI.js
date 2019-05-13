
/*
import ApolloClient from "apollo-boost";
import { gql } from "apollo-boost";

const client = new ApolloClient({
  uri: "https://48p1r2roz4.sse.codesandbox.io"
});

https://www.apollographql.com/docs/react/essentials/get-started 
*/



import { gql } from "apollo-boost";

import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "http://localhost:8080/graphql"
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
  .then(result => console.log(result.data));