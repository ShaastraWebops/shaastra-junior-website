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
import  fileDownload  from 'js-file-download';
import { Usercontext } from "../signinUp/Context";


const EventPage = ()=>{

    const history = useHistory();
    const { id } = useParams<{id : string}>();
    const today = new Date();
    const {role} = React.useContext(Usercontext);
    
    const {data , loading , error } = useGetEventQuery({variables : {
        getEventEventId : id
    }});
    const event = data?.getEvent ;
    const [deleteEvent , {data : data1 ,loading : loading1,error : error1}] = useDeleteEventMutation();

    const STANDARD  = {
        KIDS  : 0,
        FIRST : 1,
        SECOND : 2,
        THIRD : 3,
        FOURTH : 4,
        FIFTH : 5 ,
        SIXTH : 6,
        SEVENTH : 7,
        EIGTH : 8,
        NINTH : 9,
        TENTH : 10,
        ELEVENTH: 11,
        TWELFTH :12
    }
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
     let audience : any = [];

     event?.audience.map( (a) : any=> {
         audience.push(STANDARD[a])
     })
     audience.sort();
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
          
  
    if(loading) return (<Loader />)

    return(
        <CustomBox>
            <Flex flexDirection={"column"} alignItems="center" paddingTop={['20px','20px']} minHeight={"100vh"}>
            <Heading mb={4}>{event?.title}</Heading>
             <Container maxWidth="6xl" alignItems="center" justifyItems={'center'}>
             <Center>
             <Image
                h={['2%',"300px","200px"]}
                // width={'auto'}
                objectFit ={'contain'}
                src={event?.pic}
                p={4}
                rounded={["3xl","3xl"]}
                className="card-img"
            />
             </Center>
                <Center>
                <Text
                fontWeight={'medium'}
                fontSize={'20px'}
                p={4}>
                {event?.description}
                </Text>
                </Center>
             </Container>
             <Container maxWidth="6xl">
             <Center>
                <Flex flexDirection={['column','column','row']}>
                <Text
                fontWeight={'medium'}
                fontSize={'20px'}
                p={2} m={2}>
                 <Center>
                Audience : 
                 <Tag variant="solid" colorScheme={'orange'} p={2} m={1}
                    > <TagLabel fontSize={'md'}>
                        {
                            audience.length > 1 ? (audience[0] + " th - " + audience[(audience.length - 1)] + " th ") : 
                            audience[0] + " th"
                        }
                        </TagLabel></Tag>
                 </Center>
                </Text>
               {
                    event?.platform  ?
                    <Text
                    fontWeight={'medium'}
                    fontSize={'20px'}
                    p={2} m={2}>
                    <Center>
                       
                     Platform : 
                     <Tag variant="solid" colorScheme={'orange'} p={2} m={1}
                        > <TagLabel fontSize={'md'}>{event?.platform }</TagLabel></Tag>
                    </Center>
                    </Text> 
                    : null
               }
                </Flex>
                </Center>
                <Center>
                {
                    event?.requirements ? (<Text
                        fontWeight={'medium'}
                        fontSize={'20px'}
                        p={4} >
                        <Center>
                        Requirements : 
                        <Tag variant="solid" colorScheme={'orange'} p={2} m={1}
                            > <TagLabel fontSize={'md'}>{event?.requirements}</TagLabel></Tag>
                        </Center>
                        </Text>) : null
                }
                </Center>
                <Center>
                <Flex flexDirection={['column','column','row']}>
                    
                {
                   
                        <Text
                    fontWeight={'medium'}
                        fontSize={'20px'}
                        p={4}
                    >
                    <Center>
                    Registration : <Tag variant="solid" colorScheme={'orange'} p={2} m={1}
                    > <TagLabel fontSize={'md'}>{event?.registrationType}</TagLabel></Tag>
                      </Center>
                    </Text>
                  
                }{ event?.registrationType === "TEAM" ?
                    <Text
                    fontWeight={'medium'}
                        fontSize={'20px'}
                        p={4}
                    >
                    <Center>
                    Maximum Team Size : <Tag variant="solid" colorScheme={'orange'} p={2} m={1}
                    > <TagLabel fontSize={'md'}>{event?.teamSize}</TagLabel></Tag>
                      </Center>
                    </Text> : null

                }
               
                    </Flex>
                </Center>
                 <Flex p={3} flexDirection={["column","column","row"]} alignItems={'center'}>

                    <Spacer />
                    <Flex float = "right"  p={3} flexDirection={["column","column","row"]}>
                    {
                     role === "ADMIN" ? (<React.Fragment>
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
 
                     
                     <Button color={'#244f3b'} variant="outline" border="2px solid"
                     borderColor = "#244f3b"
                     size="sm" p={2} m={2}
                     onClick={()=>{fileDownload(data2?.exportCSV!, `${event?.title}_participants.csv`);}}
                     ><EditIcon m={2}/>Download participants csv</Button>
                     </React.Fragment>) : null
                    }
                    {
                        role === "USER" ? (<RegisterNow data={event}/>) : null
                    }
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
            {
                event?.faqs.length! > 0 ? (
                    <Container maxWidth="5xl">
                    <Center textAlign={"center"}>
                    <Heading size={'lg'} m={4}>FREQUENTLY ASKED QUESTIONS</Heading>
                    </Center>
                       {
                           role === 'ADMIN' ? (
                               <Flex p={2} flexDirection={['column','column','row']} >
       
                               <FormControl m={2} width={["100%","100%","45%"]}>
                                       <Input  name = "aquestion"
                                       placeholder = {'Question'}
                                       value={aquestion}
                                       onChange = {(event)=>handleAddFaq(event)}
                                       fontSize={'small'} p={2} borderColor={'#244f3b'}
                                      />
                                       </FormControl>
                                       <FormControl m={2} width={["100%","100%","45%"]}>
                                       <Input name = "aanswer"
                                       placeholder = {'Answer'}
                                       value={aanswer}
                                       onChange = {(event)=>handleAddFaq(event)}
                                       fontSize={'small'} p={2} borderColor={'#244f3b'} />
                                       </FormControl>
                                       <Button color={'#244f3b'} variant="solid" border="2px solid"
                                           borderColor = "#244f3b"size="sm" p={3} m={3}
                                           onClick = {()=> handleAdd()}
                                       >Add FAQ</Button>
                               </Flex>
                           ) : null
                           
                       }
                   
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
                                                   role === "ADMIN" ?(<Box>
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
                                                       </Box>) : null
                                                   
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
                ) : (
                    <React.Fragment>
                         {
                           role === 'ADMIN' ? (
                              <Container maxWidth={'5xl'}>
                                <Center m={2} p={2}>
                                <Heading>Add FAQs</Heading>
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
                                    </Container>
                           ) : null
                           
                       }
                    </React.Fragment>
                )
                
            }

         </Flex>
           
        </CustomBox>
    )
}

export default EventPage;