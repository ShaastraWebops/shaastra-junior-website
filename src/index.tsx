import { InMemoryCache , ApolloClient, ApolloProvider, HttpLink  } from "@apollo/client"
import { ColorModeScript } from "@chakra-ui/react"
import * as React from "react"
import ReactDOM from "react-dom"
import { App } from "./App"
import reportWebVitals from "./reportWebVitals"
import * as serviceWorker from "./serviceWorker"
import { theme } from "./styles/themes/theme"



const link = new HttpLink({
  uri: 'https://api.shaastra.org/graphql',
  credentials: 'include'
});



const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
  credentials : "include"
})




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
