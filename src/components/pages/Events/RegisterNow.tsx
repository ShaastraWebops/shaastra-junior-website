import React from 'react'
import { Flex,Button,FormControl,FormLabel,Heading, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Spacer, Tag, TagLabel, useDisclosure } from "@chakra-ui/react";


const RegisterNow = ({data} : any) => {
    const today = new Date();
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <Flex >
            <Button onClick={onOpen}
                     width={["100%","100%","auto"]}
                    colorScheme="#6a6a85b6" variant="outline" border="2px solid"
                    borderColor = "#222244d2"
                    isDisabled = { (data.deadline.getFullYear() === today.getFullYear())&&(
                        data.deadline.getMonth() === today.getMonth()
                    )&&(data.deadline.getDate()-today.getDate()) < 1 ? true : false }
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
                        <ModalContent>
                        <ModalHeader>Register Now</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody pb={6}>
                            <FormControl>
                            <FormLabel>Name</FormLabel>
                            <Input  placeholder="Name" />
                            </FormControl>

                            <FormControl mt={4}>
                            <FormLabel>Shaastra ID</FormLabel>
                            <Input placeholder="Shaastra ID" />
                            </FormControl>
                        </ModalBody>

                        <ModalFooter>
                            <Button 
                             colorScheme="#6a6a85b6" variant="outline" border="2px solid"
                             borderColor = "#222244d2" mr={3}>
                            Register
                            </Button>
                            <Button onClick={onClose}
                            colorScheme="#6a6a85b6" variant="outline" border="2px solid"
                            borderColor = "#222244d2"
                            >Cancel</Button>
                        </ModalFooter>
                        </ModalContent>
                    </Modal>
        </Flex>
    )
}

export default RegisterNow
