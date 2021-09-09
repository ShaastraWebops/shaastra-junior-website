import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import * as React from "react";
import CustomBox from "../../shared/CustomBox";
import Card from "../workshops/Card";
import { competitions, workshops } from "../workshops/data";
import "../../../styles/events.css"
import { useGetEventsQuery } from "../../../types/generated/generated";
import { AddIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import Loader from "../../shared/Loader";


const Events = ({ type }: any) => {
  //  const data1 = (type === "competitions" ? competitions : workshops) ;
  const { data, error, loading } = useGetEventsQuery({
    variables: {
      getEventsFilter: type
    }
  });
  const data1 = data?.getEvents.events

  console.log(data)

  if (loading) return (<Loader />)
  return (
    <CustomBox>
      <Flex flexDirection={"column"} alignItems="center" paddingTop={['60px', '80px']} minHeight={"100vh"}>
        <Heading >{type}</Heading>
        <Box width={['90%', '85%']}><Link to="/addevent"><Button float={'right'} color={'#244f3b'} variant="solid" border="2px solid"
          borderColor="#244f3b" size="sm" p={2} m={2}
        ><AddIcon m={2} />Add Event</Button></Link></Box>
        <Flex flexDirection={"column"} justifyContent="center" alignItems="center" width={'100%'} >
          {
            data1?.map((event) => (
              <Card key={event.id} data={event} type={type} />
            ))
          }
        </Flex>

      </Flex>
    </CustomBox>
  )
}

export default Events;
