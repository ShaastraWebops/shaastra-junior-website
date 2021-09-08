import * as React from "react"
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import { Logo } from "./Logo"
import { css, Global } from "@emotion/react";
import Loader from "./components/shared/Loader";
import { ApolloProvider } from '@apollo/client';
import { Usercontext } from "./components/pages/signinUp/Context";
import {useState, useEffect} from "react"

const AppRoutes = React.lazy(() => import("./components/AppRoutes"));


const GlobalStyles = css`
.js-focus-visible :focus:not([data-focus-visible-added]) {
     outline: none;
     box-shadow: none;
   }
`;

export const App = () => {
  const [role, setRole] = useState<any | null>("")
    useEffect(() => {
        setRole(localStorage.getItem("role"))
        console.log(role)
    }, [])
  return (
    <React.Suspense fallback={<Loader />}>
      <ChakraProvider >
        {/* <Global styles={GlobalStyles} /> */}
        <Usercontext.Provider value={{role,setRole}}>
        <AppRoutes />
        </Usercontext.Provider>
        </ChakraProvider>
    </React.Suspense>
  );
  }
