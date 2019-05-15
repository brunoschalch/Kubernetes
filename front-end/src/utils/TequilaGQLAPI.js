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
  .then(/*result => console.log(result.data)*/);
