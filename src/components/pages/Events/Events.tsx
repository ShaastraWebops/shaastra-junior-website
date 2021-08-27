import { Flex, Heading} from "@chakra-ui/react";
import * as React from "react";
import CustomBox from "../../shared/CustomBox";
import Card from "../workshops/Card";
import { competitions,workshops} from "../workshops/data";


const Events = ({type}: any) => {
    const data = (type === "competitions" ? competitions : workshops) ;
    return (
        <CustomBox>
         <Flex flexDirection={"column"} justifyContent="center" alignItems="center" paddingTop={'60px'} minHeight={"100vh"}>
            <Heading >{type === "competitions" ? "COMPETITIONS" : "WORKSHOPS"}</Heading>
             <Flex flexDirection={"column"} justifyContent="center" alignItems="center" >
             {
                data.map( (event) =>(
                      <Card key={event.id} data = {event} type= {type}/>
                ))
              }
             </Flex>
            
         </Flex>
      </CustomBox>
    )
}

export default Events;
