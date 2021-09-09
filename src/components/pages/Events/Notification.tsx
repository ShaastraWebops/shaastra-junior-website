import * as React from "react";
import {Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    useDisclosure} from "@chakra-ui/react";
    
const Notification = ( {msg} : any ) =>{

    var {isOpen, onOpen, onClose} = useDisclosure();
    return(
        <Modal isOpen={true} onClose={onClose}>
                 <ModalOverlay></ModalOverlay>
                 <ModalContent backgroundColor="#AACDBE" color="#222244">
                    <ModalHeader paddingTop="4vh" borderBottom="2px solid #1c1c2bc2" margin="0 1vw" textAlign="center">
                     <h2>{msg}</h2>
                    </ModalHeader>
                    <ModalCloseButton></ModalCloseButton>
                </ModalContent>
            </Modal>
    )
}

export default Notification;
