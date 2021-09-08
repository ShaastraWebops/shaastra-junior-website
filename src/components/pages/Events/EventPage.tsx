import { AddIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { Box, Button, Center,FormControl,Input , Container, Flex,Heading ,Image, Spacer, Table, TableCaption, Tag, TagLabel, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import moment from "moment";
import * as React from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { GETEVENT, GETEVENTS } from "../../../Queries.graphql";
import { useCreateEventFaqMutation, useDeleteEventFaqMutation, useDeleteEventMutation, useEditEventFaqMutation, useExportCsvQuery, useGetEventQuery, useGetEventsQuery } from "../../../types/generated/generated";
import CustomBox from "../../shared/CustomBox";
import Loader from "../../shared/Loader";
import { competitions,workshops } from "../workshops/data";
import RegisterNow from "./RegisterNow";
import { onError } from 'apollo-link-error';


const EventPage = ()=>{

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
                },
                refetchQueries : [{query:GETEVENTS,variables:{ getEventsFilter: event?.eventType}}]
            }
        ).then(()=> history.goBack() )
    }
    const [faqId,setFaqId] = React.useState("");
    const [uquestion , setQuestion] = React.useState("");
    const [uanswer , setAnswer] = React.useState("");

    const [aquestion , setAQuestion] = React.useState("");
    const [aanswer , setAAnswer] = React.useState("");


    const [editFaq] = useEditEventFaqMutation();
    const [deleteFaq] = useDeleteEventFaqMutation();
    const [addFaq] = useCreateEventFaqMutation();

    const handleUpdateFaq = (event : React.ChangeEvent<HTMLInputElement>) =>{

        if(event.target.name === "uquestion"){
            setQuestion(event.target.value)
        }else{
            setAnswer(event.target.value)
        }

    }
    const handleAddFaq = (event : React.ChangeEvent<HTMLInputElement>) =>{

        if(event.target.name === "aquestion"){
            setAQuestion(event.target.value)
        }else{
            setAAnswer(event.target.value)
        }

    }
    
    const handleAdd = () =>{
        addFaq({
            variables :{
                createEventFaqEventId : id,
                createEventFaqData : {
                    question : aquestion,
                    answer: aanswer
                }
            },
            refetchQueries : [{query:GETEVENT,variables:{ getEventEventId: id }}]
        }).catch(err => console.log(err))
        setAQuestion("")
        setAAnswer("")

    }
    let audience =" ";
    event?.audience.map(a =>{
        audience += a
    } )

    const handleedit = (faqid :string) =>{
        editFaq({
            variables :{
                editEventFaqEventFaqid : faqid,
                editEventFaqData : {
                    question : uquestion,
                    answer: uanswer
                }
            },
            refetchQueries : [{query:GETEVENT,variables:{ getEventEventId: id }}]
        }).catch(err => console.log(err))
        setFaqId("")
        setQuestion("")
        setAnswer("")
    }

    const {data : data2,loading:loading2,error:error2} = useExportCsvQuery(
        {
            variables :{
                exportCsvEventId : id
            }
        }
    )
        console.log(error2)
        const errorLink = onError(({ graphQLErrors, networkError }) => {
            if (graphQLErrors) {
              console.log('graphQLErrors', graphQLErrors);
            }
            if (networkError) {
              console.log('networkError', networkError);
            }
          });
   
  
    if(loading) return (<Loader />)

    return(
        <CustomBox>
            <Flex flexDirection={"column"} alignItems="center" paddingTop={['60px','100px']} minHeight={"100vh"}>
            <Heading mb={4}>{event?.title}</Heading>
             <Container maxWidth="6xl" alignItems="center" justifyItems={'center'}>
             <Flex flexDirection={['column','column','row']}alignItems="center" justifyItems={'center'}>
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
                    Registration Type : <Tag variant="solid"
                    > <TagLabel>{event?.registrationType}</TagLabel></Tag>
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
                    <Button color={'#244f3b'} variant="outline" border="2px solid"
                    borderColor = "#244f3b"
                    size="sm" p={2} m={2}
                    onClick={()=>{}}
                    ><EditIcon m={2}/>Download participants csv</Button>
                    </Flex>
                 </Flex>
                </Flex>
             </Flex>
             </Container>
             <Center m={2} p={3} width={['250px','70%']}>
             <Table variant="simple" colorScheme={'#244f3b'} size={'md'}>
                <Thead color={'#244f3b'}>
                    <Tr>
                    <Th>&nbsp;&nbsp;</Th>
                    <Th color={'black'} fontWeight={'800'}>Open Time</Th>
                    <Th color={'black'} fontWeight={'800'}>Close Time</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                    <Td color={'black'} fontWeight={'700'}>Registrations</Td>
                    <Td >{moment(parseInt(event?.registrationOpenTime!)).format("MMMM Do YYYY, h:mm a")}</Td>
                    <Td >{moment(parseInt(event?.registrationCloseTime!)).format("MMMM Do YYYY, h:mm a")}</Td>
                    </Tr>
                    <Tr>
                    <Td color={'black'} fontWeight={'700'}>Event</Td>
                    <Td>{moment(parseInt(event?.eventTimeFrom!)).format("MMMM Do YYYY, h:mm a")}</Td>
                    <Td>{moment(parseInt(event?.eventTimeTo!)).format("MMMM Do YYYY, h:mm: a")}</Td>
                    </Tr>
                </Tbody>

                </Table>
             </Center>
             <Container maxWidth="5xl">
             <Center textAlign={"center"}>
             <Heading size={'lg'} m={4}>FREQUENTLY ASKED QUESTIONS</Heading>
             </Center>
            <Flex >
            <FormControl m={2} width={"45%"}>
                    <Input  name = "aquestion"
                    placeholder = {'Question'}
                    value={aquestion}
                    onChange = {(event)=>handleAddFaq(event)}
                    fontSize={'small'} p={2} borderColor={'#244f3b'}
                   />
                    </FormControl>
                    <FormControl m={2} width={"45%"}>
                    <Input name = "aanswer"
                    placeholder = {'Answer'}
                    value={aanswer}
                    onChange = {(event)=>handleAddFaq(event)}
                    fontSize={'small'} p={2} borderColor={'#244f3b'} />
                    </FormControl>
                    <Button color={'#244f3b'} variant="solid" border="2px solid"
                        borderColor = "#244f3b"size="sm" p={2} m={3}
                        onClick = {()=> handleAdd()}
                    >Add FAQ</Button>
            </Flex>
            
             <Flex flexDirection={'column'} p={2}>
                {
                    event?.faqs.map((faq)=>{
                        return(
                            <Box m={4} key={faq.id}>
                                <Flex>

                                    <Box p={'5'} width={"100%"} borderTopRadius={"lg"} backgroundColor={"#467d63"}>
                                       <Heading size = "md">{faq.question}</Heading>
                                       {
                                           faqId === faq.id ? (
                                        <FormControl m={3}>
                                            <Input 
                                            onChange = {handleUpdateFaq} name ="uquestion"
                                            value={uquestion} borderColor={'#244f3b'} placeholder="Question" color={"#244f3b"}/>
                                        </FormControl>) :null
                                       }
                                    </Box>
                                </Flex>
                                <Flex>
                                    <Box p={'5'} width={"100%"} backgroundColor={'#f4f7c6'} borderBottomRadius={"lg"} >
                                    <Text fontWeight={"semibold"}>{faq.answer}</Text>
                                    {
                                           faqId === faq.id ? (
                                            <FormControl m={3}>
                                                <Input 
                                                 onChange = {(event)=>handleUpdateFaq(event)}
                                                 name = "uanswer"
                                                 value={uanswer} borderColor={'#244f3b'} placeholder="Answer" color={"#244f3b"}/>
                                            </FormControl>) :null
                                       }
                                  
                                     {
                                         faqId === faq.id ?
                                         (
                                            <Box>
                                            <Button color={'#244f3b'} variant="solid" border="2px solid"
                                            borderColor = "#244f3b"
                                            size="sm" p={2} m={2}
                                            onClick={() => handleedit(faq.id)}
                                            float = {'right'}
                                            >Edit FAQ</Button>
                                            </Box>
                                          )
                                         :
                                         (
                                            <Box>
                                            <Button color={'#244f3b'} variant="outline" border="2px solid"
                                            borderColor = "#244f3b"
                                            size="sm" p={2} m={2}
                                            onClick={()=>{setFaqId(faq.id)}}
                                            float = {'right'}
                                            ><EditIcon m={2}/>Edit FAQ</Button>
                                            <Button color={'#244f3b'} variant="outline" border="2px solid"
                                            borderColor = "#244f3b"
                                            size="sm" p={2} m={2}
                                            onClick = {() =>{
                                                deleteFaq({variables :{
                                                    deleteEventFaqEventFaqid : faq.id
                                                },
                                                refetchQueries : [{query:GETEVENT,variables:{ getEventEventId: id }}]
                                            })
                                            }}
                                            float = {'right'}
                                            ><DeleteIcon m={2}/>Delete FAQ</Button>
                                            </Box>
                                         )
                                     }
                                    
    
                                    </Box>
                                   
                                </Flex>
                            </Box>

                        )
                    })
                }
             </Flex>
             </Container>

         </Flex>
           
        </CustomBox>
    )
}

export default EventPage;