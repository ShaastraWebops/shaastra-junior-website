import {Flex, Heading} from "@chakra-ui/react";
import * as React from "react";
import CustomBox from "../../shared/CustomBox";
import "../../../styles/Competitions.css"
import Card from "./Card";
import { workshops } from "./data";

const Workshops = () => {
    return (
      <CustomBox>
         <Flex flexDirection={"column"} justifyContent="center" alignItems="center" paddingTop={'60px'}>
            <Heading >WORKSHOPS</Heading>
             <Flex flexDirection={"column"} justifyContent="center" alignItems="center" >
             {
                workshops.map( (ws) =>(
                      <Card key={ws.id} data = {ws} type= {"workshop"} />
                ))
              }
             </Flex>
            
         </Flex>
      </CustomBox>
    );
  };
  
  export default Workshops;