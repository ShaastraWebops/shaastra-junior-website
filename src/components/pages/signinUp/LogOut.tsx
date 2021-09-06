import React from 'react'
import { useHistory } from 'react-router'
import { useLoginMutation } from '../../../types/generated/generated'
import {Modal,
ModalOverlay,
ModalContent,
ModalHeader,
ModalCloseButton,
ModalBody,
useDisclosure} from "@chakra-ui/react"

const LogOut = async () => {

    var {isOpen, onOpen, onClose} = useDisclosure();
    isOpen = true
    const [logOutMutation, {data,loading,error}] = useLoginMutation()
    const history = useHistory()
    const resp = await logOutMutation();
    onClose = async  () => {
        history.push('/')
    }
    return(
        <Modal isOpen={isOpen} onClose={onClose}>
             <ModalOverlay></ModalOverlay>
             <ModalContent backgroundColor="#AACDBE" color="#222244">
                <ModalHeader paddingTop="4vh" borderBottom="2px solid #1c1c2bc2" margin="0 1vw" textAlign="center">
                 <h2>Logged out Successfully</h2>
                </ModalHeader>
                <ModalCloseButton></ModalCloseButton>
            </ModalContent>
        </Modal>
    )

}

export default LogOut