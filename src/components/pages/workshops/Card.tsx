import {  Flex, Text } from "@chakra-ui/layout";
import { Box,Button,FormControl,FormLabel,Heading, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Spacer, Tag, TagLabel, useDisclosure } from "@chakra-ui/react";
import {Link, useHistory } from "react-router-dom";
import * as React from "react";
import { workshop } from "./data";
import RegisterNow from "../Events/RegisterNow";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { useDeleteEventMutation, useGetEventsQuery } from "../../../types/generated/generated";
import Loader from "../../shared/Loader";
import moment from 'moment';
import { GETEVENTS } from "../../../Queries.graphql";
import { Usercontext } from "../signinUp/Context";

const Card = ({data, type} : any) =>{
    const history = useHistory();
    const today = new Date();
    console.log(type)
    const [deleteEvent , {data : data1,loading,error}] = useDeleteEventMutation();
    const {role} =React.useContext(Usercontext);
     
    const DeleteEvent = (id : string) =>{
        deleteEvent(
            {
                variables :{
                    deleteEventEventId : id
                },
                refetchQueries : [{query:GETEVENTS,variables:{ getEventsFilter: type}}]
            }
        )
    }
    if(loading) return (<Loader />)
    return(
            <Box width={'85%'}>
                <Flex
            rounded={'xl'}
            p={2} m={3}
            width={['auto','100%']}
            alignItems={'center'}
            flexDirection={['column','column','row']}
            justifyContent={'space-between'}
            _hover={{boxShadow : 'lg',}}
            backgroundColor={'#F1F2E1'}>
            <Image
                h={['15%','175px']}
                width ={['250px']}
                objectFit ={'cover'}
                src={data.pic}
                rounded="2xl"
                m={3}
                className="card-img"
            />
            <Flex
                direction={'column'}
                justifyContent={['center','space-between']}
                width='full' m={2}>
                <Heading size="lg"  m={2}>{data.title}</Heading>
                <Text
                fontWeight={'medium'}
                fontSize={'15px'}
                p={3}>
                {data.description}
                </Text>
                <Flex p={3}>
                <Text fontWeight={'medium'}>
                    Registrations From :  
                    <Tag variant="solid" 
                     p={2} mx={2} >
                    <TagLabel>{moment(parseInt(data?.registrationOpenTime!)).format("MMMM Do YYYY, h:mm a")}</TagLabel>
                    </Tag>
                     to 
                    <Tag variant="solid" 
                     p={2} mx={2} >
                    <TagLabel>{moment(parseInt(data?.registrationCloseTime!)).format("MMMM Do YYYY, h:mm a")}</TagLabel>
                    </Tag>
                    </Text>
                </Flex>
                  <Flex p={3} flexDirection={["column","column","row"]}>
                   
                    <Button color={'#244f3b'} variant="outline" border="2px solid"
                    borderColor = "#244f3b"
                    size="sm" p={2} m={2}
                     onClick={() => {
                         if(type === "WORKSHOPS"){
                            history.push(`/workshops/${data.id}`)
                         }else if(type === "COMPETITIONS"){
                            history.push(`/competitions/${data.id}`)
                         }else if(type === "SHOWS"){
                            history.push(`/shows/${data.id}`)
                         }
                     }} >
                        View Details
                    </Button>
                    {
                         role === "ADMIN" ?(
                             <React.Fragment>
                                 <Button color={'#244f3b'} variant="outline" border="2px solid"
                                    borderColor = "#244f3b"
                                    size="sm" p={2} m={2}
                                    onClick={() => { history.push(`/editevent/${data.id}`)}}
                                    ><EditIcon m={2}/>Edit Event</Button>
                                    <Button color={'#244f3b'} variant="outline" border="2px solid"
                                    borderColor = "#244f3b"
                                    size="sm" p={2} m={2}
                                    onClick = {() => DeleteEvent(data?.id!)}
                                    ><DeleteIcon m={2}/>Delete Event</Button>
                             </React.Fragment>
                         ) : null
                    }
                    
                    {
                        role === "USER"? ( <RegisterNow  data={data} />) : null
                    }
        
                   
                    </Flex>
                </Flex>
                
      </Flex>
            </Box>
    )


}

export default Card;