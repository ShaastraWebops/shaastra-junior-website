import { Box, Button, Flex, Heading ,Center ,  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,Text} from "@chakra-ui/react";
import * as React from "react";
import CustomBox from "../../shared/CustomBox";
import Card from "./Card";
import "../../../styles/events.css"
import { useGetEventQuery, useGetEventsQuery } from "../../../types/generated/generated";
import { AddIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import Loader from "../../shared/Loader";
import { Usercontext } from "../signinUp/Context";


const Events = ({type}: any) => {
   //  const data1 = (type === "competitions" ? competitions : workshops) ;
     const {role} = React.useContext(Usercontext) ;
     const {data,error,loading} = useGetEventsQuery({variables:  {
       getEventsFilter: type
      }});
    const data1 =data?.getEvents.events
   
    console.log(data)
    
    if(loading) return(<Loader />)
    return (
        <CustomBox>
         <Flex flexDirection={"column"}  alignItems="center" paddingTop={['10px','20px']} minHeight={"100vh"}>
            <Heading p={2}>{type}</Heading>
           {
             role === "ADMIN" ? (
              <Box width={['90%','85%']}><Link to="/addevent"><Button float={'right'} color={'#244f3b'} variant="solid" border="2px solid"
              borderColor = "#244f3b"size="sm" p={2} m={2}
            ><AddIcon m={2} />Add Event</Button></Link></Box>
             ) : null
           }
             {
               data1?.length! >= 1 ? (<Flex flexDirection={"column"} justifyContent="center" alignItems="center" width={'100%'} >
               {
                  data1?.map( (event) =>(
                        <Card key={event.id} data = {event} type= {type}/>
                  ))
                }
               </Flex>) :  (
              
                      <Center width={'85%'}>
                      <Alert 
                      aligncontents={'center'} 
                      justifyContent = {'center'}
                      textAlign= {'center'}
                      status="info" height = "100px"  backgroundColor={'#F1F2E1'}  rounded={'xl'}
                      p={2} m={3}>
                     <Center>
                     <AlertIcon boxSize="40px" m={2}/>
                      <Box flex="1">
                        <AlertDescription display="flex">
                        <Heading as={"h2"} size={"lg"} textColor={'#244f3b'}> No {type} are scheduled yet</Heading>
                        </AlertDescription>
                      </Box>
                     </Center>
                    </Alert>
                    </Center>
               )
             }
            
         </Flex>
      </CustomBox>
    )
}

export default Events;
