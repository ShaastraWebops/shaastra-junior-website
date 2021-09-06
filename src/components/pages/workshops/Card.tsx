import {  Flex, Text } from "@chakra-ui/layout";
import { Button,FormControl,FormLabel,Heading, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Spacer, Tag, TagLabel, useDisclosure } from "@chakra-ui/react";
import {Link, useHistory } from "react-router-dom";
import * as React from "react";
import { workshop } from "./data";
import RegisterNow from "../Events/RegisterNow";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { useDeleteEventMutation, useGetEventsQuery } from "../../../types/generated/generated";
import Loader from "../../shared/Loader";

const Card = ({data, type} : any) =>{
    const history = useHistory();
    const today = new Date();
    console.log(type)
    const [deleteEvent , {data : data1,loading,error}] = useDeleteEventMutation();

     
    const DeleteEvent = (id : string) =>{
        deleteEvent(
            {
                variables :{
                    deleteEventEventId : id
                }
            }
        )
    }
    if(loading) return (<Loader />)
    return(
            <Flex
            rounded={'xl'}
            p={2} m={3}
            width={['auto','85%']}
            alignItems={'center'}
            flexDirection={['column','column','row']}
            justifyContent={'space-between'}
            _hover={{boxShadow : 'lg',}}
            backgroundColor={'#F1F2E1'}>
            <Image
                h={['20%','200px']}
                objectFit ={'fill'}
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
                  <Flex p={3} flexDirection={["column","column","row"]}>
                  {/* <Text fontWeight={'medium'}>
                    DeadLine : 
                    <Tag variant="solid" 
                     p={2} mx={2}
                    colorScheme={(data.deadline.getFullYear() === today.getFullYear())&&(
                        data.deadline.getMonth() === today.getMonth()
                    )&&(data.deadline.getDate()-today.getDate()) <= 1 ? "red" : "teal"}
                    >
                        <TagLabel>{data.deadline.toDateString()}</TagLabel>
                        </Tag>
                    </Text> */}
                    <Spacer />
                    <Button color={'#244f3b'} variant="outline" border="2px solid"
                    borderColor = "#244f3b"
                    size="sm" p={2} m={2}
                     onClick={() => {
                         if(type === "WORKSHOPS"){
                            history.push(`/workshops/${data.id}`)
                         }else if(type === "COMPETITIONS"){
                           
                            history.push(`/competitions/${data.id}`)
                         }
                     }} >
                        View Details
                    </Button>
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
        
                    <RegisterNow  data={data} />
                    </Flex>
                </Flex>
                
      </Flex>
    )


}

export default Card;