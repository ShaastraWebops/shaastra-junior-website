import React, { Fragment } from 'react'
import { Flex,Button,FormControl,FormLabel,Heading, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Spacer, Tag, TagLabel, useDisclosure, RadioGroup, HStack, Radio } from "@chakra-ui/react";



const RegisterNow = ({data} : any) => {
    const today = new Date();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [rvalue, setRValue] = React.useState<string>("2")
    console.log(rvalue)
    return (
        <Flex >
            <Button onClick={onOpen}
                     width={["100%","100%","auto"]}
                     color='#244f3b' variant={'outline'} border="2px solid"
                     borderColor = '#244f3b'
                    // isDisabled = { (data.deadline.getFullYear() === today.getFullYear())&&(
                    //     data.deadline.getMonth() === today.getMonth()
                    // )&&(data.deadline.getDate()-today.getDate()) < 1 ? true : false }
                     size="sm" p={2} m={2}>
                        Register Now
                    </Button>
                    <Modal
                        size={"sm"}
                        isOpen={isOpen}
                        onClose={onClose}
                        blockScrollOnMount={false}
                    >
                        <ModalOverlay />
                        <ModalContent backgroundColor={'#AACDBE'} >
                        <ModalHeader>Register Now</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody pb={6}>
                            <FormControl>
                            <FormLabel >Name</FormLabel>
                            <Input borderColor={'#244f3b'} placeholder="Name" color={"#244f3b"} />
                            </FormControl>

                            <FormControl my={4}>
                            <FormLabel>Shaastra ID</FormLabel>
                            <Input borderColor={'#244f3b'} placeholder="Shaastra ID" color={"#244f3b"}/>
                            </FormControl>
                            <FormControl>
                            <RadioGroup onChange={setRValue} value={rvalue} size={'sm'}>
                                <HStack spacing="10px">
                                <Radio value="0">Individual Registration</Radio>
                                <Radio value="1">Registration As Team</Radio>
                                </HStack>
                            </RadioGroup>
                            </FormControl>
                           {
                                rvalue === "1" ? (
                                <Fragment>
                                <FormControl m={2}>
                                <FormLabel >Team Name</FormLabel>
                                <Input borderColor={'#244f3b'} placeholder="Team Name" color={"#244f3b"} />
                                </FormControl>
                                <FormControl m={2}>
                                <FormLabel >Team Number 1</FormLabel>
                                <Input borderColor={'#244f3b'} placeholder="SHAASTRA ID" color={"#244f3b"} />
                                </FormControl>
                                 <FormControl m={2}>
                                 <FormLabel >Team Number 2</FormLabel>
                                 <Input borderColor={'#244f3b'} placeholder="SHAASTRA ID" color={"#244f3b"} />
                                 </FormControl>
                                 </Fragment>
                                ):null
                            }
                          
                        </ModalBody>

                        <ModalFooter>
                            <Button 
                             color='#244f3b' variant={'outline'} border="2px solid"
                             borderColor = '#244f3b'
                              mr={3}>
                            Register
                            </Button>
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
