import { Flex, Heading} from "@chakra-ui/react";
import * as React from "react";
import CustomBox from "../../shared/CustomBox";
import Card from "../workshops/Card";
import { competitions} from "../workshops/data";

const Competitions = () => {
    return (
        <CustomBox>
         <Flex flexDirection={"column"} justifyContent="center" alignItems="center" paddingTop={'60px'} minHeight={"100vh"}>
            <Heading >COMPETITIONS</Heading>
             <Flex flexDirection={"column"} justifyContent="center" alignItems="center" >
             {
                competitions.map( (cs) =>(
                      <Card key={cs.id} data = {cs} type="competitions"/>
                ))
              }
             </Flex>
            
         </Flex>
      </CustomBox>
    )
}

export default Competitions;
