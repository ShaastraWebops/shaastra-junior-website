import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { Box, Button, Center, Container, Flex, Heading ,Image, Spacer, Tag, TagLabel, Text } from "@chakra-ui/react";
import * as React from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { useDeleteEventMutation, useGetEventQuery, useGetEventsQuery } from "../../../types/generated/generated";
import CustomBox from "../../shared/CustomBox";
import Loader from "../../shared/Loader";
import { competitions,workshops } from "../workshops/data";
import RegisterNow from "./RegisterNow";

const EventPage = ({type} : any)=>{

    const history = useHistory();
    const { id } = useParams<{id : string}>();
    const today = new Date();
    
    const {data , loading , error } = useGetEventQuery({variables : {
        getEventEventId : id
    }});
    const event = data?.getEvent ;

    const [deleteEvent , {data : data1 ,loading : loading1,error : error1}] = useDeleteEventMutation();

    const DeleteEvent = (id : string) =>{
        deleteEvent(
            {
                variables :{
                    deleteEventEventId : id
                }
            }
        ).then(()=> history.goBack() )
    }

    if(loading) return (<Loader />)

    return(
        <CustomBox>
            <Flex flexDirection={"column"} alignItems="center" paddingTop={['60px','100px']} minHeight={"100vh"}>
            <Heading mb={4}>{event?.title}</Heading>
             <Container maxWidth="6xl" alignItems="center" >
             <Flex flexDirection={['column','column','row']}>
             <Image
                h={['2%',"300px","200px"]}
                width={'auto'}
                objectFit ={'contain'}
                src={event?.pic}
                p={4}
                rounded={["3xl","3xl"]}
                className="card-img"
            />
             <Flex
                direction={'column'}
                justifyContent={'space-between'}>
                <Text
                fontWeight={'medium'}
                fontSize={'20px'}
                p={4}>
                {event?.description}
                </Text>
               
                 <Flex p={3} flexDirection={["column","column","row"]} alignItems={'center'}>
                 <Flex p={3} flexDirection="row" alignItems={'center'}>
                  <Text
                    fontFamily={'Inter'}
                    fontWeight={'medium'}
                    >
                    DeadLine : <Tag variant="solid"
                    > <TagLabel>{event?.registrationCloseTime?.toString()}</TagLabel></Tag>
                    </Text>
                    </Flex >
                    <Spacer />
                    <Flex float = "right"  p={3} flexDirection={["column","column","row"]}>
                    <Button color={'#244f3b'} variant="outline" border="2px solid"
                    borderColor = "#244f3b"
                    size="sm" p={2} m={2}
                    onClick={() => { history.push(`/editevent/${id}`)}}
                    ><EditIcon m={2}/>Edit Event</Button>
                    <Button color={'#244f3b'} variant="outline" border="2px solid"
                    borderColor = "#244f3b"
                    size="sm" p={2} m={2}
                    onClick = {() => DeleteEvent(event?.id!)}
                    ><DeleteIcon m={2}/>Delete Event</Button>
                    <RegisterNow data={event}/>
                    </Flex>
                 </Flex>
                </Flex>
             </Flex>
             </Container>
             <Container maxWidth="5xl">
             <Center textAlign={"center"}>
             <Heading size={'lg'} m={4}>FREQUENTLY ASKED QUESTIONS</Heading>
             </Center>
                {
                    event?.faqs.map((faq)=>{
                        return(
                            <Box mb={4} key={faq.id}>
                                <Flex>
                                    <Box p={'5'} width={"100%"} borderTopRadius={"lg"} backgroundColor={"#467d63"}>
                                       <Heading size = "md">{faq.question}</Heading>
                                    </Box>
                                </Flex>
                                <Flex>
                                    <Box p={'5'} backgroundColor={'#f4f7c6'} borderBottomRadius={"lg"} >
                                    <Text fontWeight={"semibold"}>{faq.answer}</Text>
                                    </Box>
                                </Flex>
                            </Box>

                        )
                    })
                }
             </Container>

         </Flex>
           
        </CustomBox>
    )
}

export default EventPage;