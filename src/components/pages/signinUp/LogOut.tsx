import React from 'react'
import { useHistory } from 'react-router-dom'
import { useLoginMutation, useLogoutMutation } from '../../../types/generated/generated'
import {Modal,
ModalOverlay,
ModalContent,
ModalHeader,
ModalCloseButton,
ModalBody,
useDisclosure} from "@chakra-ui/react"

const LogOut = () => {

    var {isOpen, onOpen, onClose} = useDisclosure();
    // isOpen = true
    const [logOutMutation, {data,loading,error}] = useLogoutMutation()
    const history = useHistory()
    console.log("exec")
    const call = async () => {
        await logOutMutation();
        document.cookie += ";max-age=0"
        console.log(data)
    }
    call()
    onClose =  () => {
        history.push('/')
        window.location.reload()
    }
    if(data?.logoutUser === true)
    {
        return(
            <Modal isOpen={true} onClose={onClose}>
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
    else 
    {
        return(
            <Modal isOpen={true} onClose={onClose}>
            <ModalOverlay></ModalOverlay>
            <ModalContent backgroundColor="#AACDBE" color="#222244">
               <ModalHeader paddingTop="4vh" borderBottom="2px solid #1c1c2bc2" margin="0 1vw" textAlign="center">
                <h2>Error Occured</h2>
               </ModalHeader>
               <ModalCloseButton></ModalCloseButton>
           </ModalContent>
             </Modal>
        )
    }

}

export default LogOut