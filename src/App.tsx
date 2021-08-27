import * as React from "react"
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import { Logo } from "./Logo"
import { css, Global } from "@emotion/react";
import Loader from "./components/shared/Loader";

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
      <ChakraProvider theme={theme}>
        <Global styles={GlobalStyles} />
        <AppRoutes />
      </ChakraProvider>
    </React.Suspense>
  );
  }
