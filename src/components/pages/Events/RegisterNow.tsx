import React, { Fragment, useContext, useState } from 'react'
import { Alert ,AlertIcon , Flex,Button,FormControl,FormLabel,Heading,Center, Image,Text, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Spacer, Tag, TagLabel, useDisclosure, RadioGroup, HStack, Radio } from "@chakra-ui/react";
import { useCreateTeamandRegisterMutation, useRegisterMutation } from '../../../types/generated/generated';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { Usercontext } from '../signinUp/Context';
import moment  from 'moment';
import Notification from './Notification';


const RegisterNow = ({data} : any) => {
    const today = new Date();
    let { isOpen, onOpen, onClose } = useDisclosure();
    const [rvalue, setRValue] = React.useState<string>("0")
    const [registerMutation , {data : data1 , error }] = useRegisterMutation();
    const [registerAsTeam] = useCreateTeamandRegisterMutation();
    const {role} =useContext(Usercontext)
    const [rerror , setError] = React.useState();
    const [rsucessful,setRsucessful] = React.useState(false);
    const [members , setMembers] = React.useState(['']);
    const [teamname, setTeamname] = React.useState('');
    

    const handleMembersInput = ({index,event} :{index: number ,event: React.ChangeEvent<HTMLInputElement>}) =>{
      const values =[...members];
      
      values[index] = event.target.value
      setMembers(values)
    }

    const handleregister = () =>{
        registerMutation({variables : {registerEventId : data?.id!}})
        .then(
            res => {
                if(res.data?.register === true) setRsucessful(true)
            }
        )
        .catch(err => setError(err.message))
    }
    const handleregisterasTeam = () =>{
        console.log("hello")
        registerAsTeam({
            variables :{
                
                createTeamAndRegisterData:{
                    members , name : teamname,eventID : data.id
                }
            }
        }).then(
            res => {
                if(res.data?.createTeamAndRegister === true) setRsucessful(true)
            }
        )
        .catch(err => setError(err.message))

    }

    
    const regdate = parseInt((moment(parseInt(data?.registrationCloseTime!)).format("DD").toString()))
    if(data.registrationType === "NONE")
    {
        return(<Text p={2}>Registration is Not required</Text>)
    }
    if(rsucessful)
    {
        onClose =  () => {
            window.location.reload()
        }
        return( <Modal isOpen={true} onClose={onClose}>
            <ModalOverlay></ModalOverlay>
                <ModalContent backgroundColor="#AACDBE" color="#222244" >
                    <ModalCloseButton onClick={onClose}></ModalCloseButton>
                    <ModalHeader paddingTop="4vh" borderBottom="2px solid #1c1c2bc2" margin="0 1vw" textAlign="center">
                     <h1>Registrated Successfully</h1>
                    </ModalHeader>
                </ModalContent>
            </Modal>
             )
    }
    return (
        <Flex >

             {
                 role !== "USER" ? null : (  <Button onClick={ onOpen}
                    width={["100%","100%","auto"]}
                    color='#244f3b' variant={'outline'} border="2px solid"
                    borderColor = '#244f3b'
                   isDisabled = {(regdate - today.getDate()) < 1 ? true : false }
                    size="sm" p={2} m={2}>
                       Register Now
                   </Button>)
             }
                    <Modal
                        size={"md"}
                        isOpen={isOpen}
                        onClose={onClose}
                        blockScrollOnMount={false}
                    >
                        <ModalOverlay />
                        <ModalContent >

                        <ModalHeader>Register Now</ModalHeader>

                        <ModalCloseButton />
                        {
                            rerror ? (
                                <Center>
                                <Alert status="error" width={'90%'}>
                                    <AlertIcon />
                                    {rerror}
                                </Alert>
                            </Center>
                            ): null
                        }
                        <ModalBody pb={6}>
                            <FormControl my={4}>
                            <FormLabel>Shaastra ID</FormLabel>
                            <Input borderColor={'#244f3b'} placeholder="Shaastra ID" color={"#244f3b"}/>
                            </FormControl>
                            <FormControl>
                            <RadioGroup onChange={setRValue} value={rvalue} size={'lg'}>
                                <HStack spacing="10px">
                                
                                <Radio value="0">
                                <Text  as={'h6'}textColor={'black'} fontSize={'lg'}>
                                    Individual Registration</Text></Radio>
                                {
                                     data.teamSize > 0 ? (
                                        <Radio value="1">
                                            <Text as={'h6'}textColor={'black'} fontSize={'lg'}>Registration As Team</Text>
                                            </Radio>
                                     ) : null
                                }
                                </HStack>
                            </RadioGroup>
                            </FormControl>
                           {
                                rvalue === "1" ? (
                                <Fragment>
                                <FormControl m={2}>
                                <FormLabel>Team Name</FormLabel>
                                <Input value={teamname}
                                onChange ={(e) => { setTeamname(e.target.value)}}
                                 borderColor={'#244f3b'} placeholder="Team Name" color={"#244f3b"} />
                                </FormControl>
                                <Text  m={2} >Team Members</Text>
                                {
                                members.map((member,index) => {
                                return(
                                    <Fragment key={index}>
                                    <Flex   width={'100%'}  >
                                    <FormControl m={2}>
                                    <Input  name = "sjdid" required
                                    placeholder = {'Shaastra Juniors Id'}
                                    id={"member"+index} fontSize={'small'} p={2} borderColor={'#244f3b'} value={member}
                                    onChange = {(event)=>handleMembersInput({index ,event})}/>
                                    </FormControl>
                                    
                                    <Flex p={[0,3]} flexDirection ={['column','row']}>
                                    {
                                    index === 0 ? null : (
                                        <Button mx={2} my={1} size={'xs'}
                                        onClick = {() => {
                                                            const values = [...members];
                                                            values.splice(index,1)
                                                            setMembers(values)
                                                            }}
                                        ><MinusIcon /></Button>)}
                                        {
                                            index  >= data.teamSize - 2 ? null : (
                                                <Button mx={2} my={1} size={'xs'}
                                                onClick={() =>{
                                                    if(members.length  < data.teamSize - 1){
                                                        setMembers([...members, ''])
                                                    }
                                                }
                                                }
                                                ><AddIcon  /></Button>
                                            )
                                        }
                                       
                                        </Flex>
                                            </Flex>
                                        </Fragment>)})}
                                        <Center>
                                        <Text>MAX TeamSize : {data.teamSize}</Text> 
                                        </Center>
                                        </Fragment>):null}
                                       
                            </ModalBody>
                                                                    
                            <ModalFooter>
                            {
                                rvalue === "0"? ( <Button 
                                    color='#244f3b' variant={'outline'} border="2px solid"
                                    borderColor = '#244f3b'
                                    mr={3}
                                    onClick = {handleregister}>
                                    Register
                                    </Button>) : 
                                    ( <Button 
                                        color='#244f3b' variant={'outline'} border="2px solid"
                                        borderColor = '#244f3b'
                                    mr={3}
                                    onClick={handleregisterasTeam}
                                    >
                                    Register as A Team
                                    </Button>)
                                }
                                    <Button onClick={onClose}
                                    color='#244f3b' variant={'outline'} border="2px solid"
                                    borderColor = '#244f3b'
                                    >Cancel</Button>
                                </ModalFooter>
                                </ModalContent>
                            </Modal>
                </Flex>
            )
        }

export default RegisterNow
