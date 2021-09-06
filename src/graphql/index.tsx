
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';



const link = new HttpLink({
  uri: 'http://localhost:8000/graphql',
  credentials: 'include'
});



const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
  credentials : "include"
})

export default client