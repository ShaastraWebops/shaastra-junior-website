import {Flex, Heading} from "@chakra-ui/react";
import * as React from "react";
import CustomBox from "../../shared/CustomBox";
import "../../../styles/Competitions.css"
import Card from "./Card";
import { shows } from "./data";

const Shows = () => {
    return (
      <CustomBox>
         <Flex flexDirection={"column"} justifyContent="center" alignItems="center" paddingTop={'60px'} backgroundColor="#AACDBE">
            <Heading marginTop="4vh" fontSize="4.4vw" color="white" letterSpacing="0.5vw">SHOWS</Heading>
             <Flex flexDirection={"column"} justifyContent="center" alignItems="center" marginTop="4vh">
             {
                shows.map( (ws) =>(
                      <Card key={ws.id} data = {ws} type= {"shows"}/>
                ))
              }
             </Flex>
            
         </Flex>
      </CustomBox>
    );
  };
  
  export default Shows;