import { InMemoryCache , ApolloClient, ApolloProvider, createHttpLink  } from "@apollo/client"
import { ColorModeScript } from "@chakra-ui/react"
import * as React from "react"
import ReactDOM from "react-dom"
import { App } from "./App"
import reportWebVitals from "./reportWebVitals"
import * as serviceWorker from "./serviceWorker"
import { theme } from "./styles/themes/theme"
import { HttpLink } from "@apollo/client"

const link = new HttpLink({
  uri: 'http://localhost:8000/graphql',
  credentials:"include"
});
const client = new ApolloClient({
  link: link ,
  cache: new InMemoryCache()
});


ReactDOM.render(
  <React.StrictMode>
  <ApolloProvider client={client}>
    <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root"),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
