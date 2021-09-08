import * as React from "react"
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import { Logo } from "./Logo"
import { css, Global } from "@emotion/react";
import Loader from "./components/shared/Loader";
import { ApolloProvider } from '@apollo/client';
import client from "./graphql";

const AppRoutes = React.lazy(() => import("./components/AppRoutes"));

const GlobalStyles = css`
.js-focus-visible :focus:not([data-focus-visible-added]) {
     outline: none;
     box-shadow: none;
   }
`;

export const App = () => {
  return (
    <React.Suspense fallback={<Loader />}>
      <ApolloProvider client = {client}>
      <ChakraProvider >
        {/* <Global styles={GlobalStyles} /> */}
        <AppRoutes />
        </ChakraProvider>
        </ApolloProvider>
    </React.Suspense>
  );
  }
