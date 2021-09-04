import { Flex, Heading} from "@chakra-ui/react";
import * as React from "react";
import CustomBox from "../../shared/CustomBox";
import Card from "../workshops/Card";
import { competitions,workshops} from "../workshops/data";
import "../../../styles/events.css"
import { useGetEventQuery, useGetEventsQuery } from "../../../types/generated/generated";


const Events = ({type}: any) => {
    // const data = (type === "competitions" ? competitions : workshops) ;
    const {data,error,loading} = useGetEventsQuery();
    const data1 = data?.getEvents.events.filter(event =>{
      event.registrationType === type;
    })
    return (
        <CustomBox>
         <Flex flexDirection={"column"} justifyContent="center" alignItems="center" paddingTop={'100px'} minHeight={"100vh"}>
            <Heading >{type === "competitions" ? "COMPETITIONS" : "WORKSHOPS"}</Heading>
             <Flex flexDirection={"column"} justifyContent="center" alignItems="center" >
             {
                data1?.map( (event) =>(
                      <Card key={event.id} data = {event} type= {type}/>
                ))
              }
             </Flex>
            
         </Flex>
      </CustomBox>
    )
}

export default Events;
