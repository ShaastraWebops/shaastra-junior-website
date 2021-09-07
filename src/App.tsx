import * as React from "react"
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import { Logo } from "./Logo"
import { css, Global } from "@emotion/react";
import Loader from "./components/shared/Loader";
import { ApolloProvider } from '@apollo/client';
import { Provider } from "./components/pages/signinUp/Context";
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
      <ChakraProvider >
        {/* <Global styles={GlobalStyles} /> */}
        <Provider>
        <AppRoutes />
        </Provider>
        </ChakraProvider>
    </React.Suspense>
  );
  }
