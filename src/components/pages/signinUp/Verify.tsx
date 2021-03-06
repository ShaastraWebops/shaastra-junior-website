import { stringify } from 'querystring'
import React from 'react'
import { Redirect,useParams } from 'react-router-dom'
import {  useHistory } from 'react-router-dom'
import {Modal, ModalOverlay, ModalHeader, ModalCloseButton, ModalBody, ModalContent, useDisclosure} from "@chakra-ui/react"
import { useVerifyUserMutation } from '../../../types/generated/generated'

const verifyCall = async (token: string, verifyUserMutation: any) => {
   
    const resp = await verifyUserMutation({variables: {verifyUserToken:token}})
    return resp;
}

const Verify = () => {
    // const {data,loading,error} = useGetProfileQuery()
    const {token} = useParams<{token: string}>();
    const [verifyUserMutation, {data,loading,error}] = useVerifyUserMutation()
    const {isOpen,  onOpen} = useDisclosure()
    // let Token = stringify(token)
    const history = useHistory();
    const verify = async () => {
    const resp = await verifyCall(token, verifyUserMutation)
    }
    React.useEffect(() => {
        verify();
    }, [])
    //if(!data) return null
    if(data?.verifyUser)
    {
        var onClose = () => {history.push('/signin')}
        return(
            <Modal isOpen={true} onClose={onClose}>
                <ModalOverlay></ModalOverlay>
                <ModalContent backgroundColor="#AACDBE" color="#222244">
                    <ModalHeader paddingTop="4vh" borderBottom="2px solid #1c1c2bc2" margin="0 1vw" textAlign="center" border="none">
                    <h2>Verified. Sign in to continue.</h2>
                    </ModalHeader>
                    <ModalCloseButton></ModalCloseButton>
                </ModalContent>
            </Modal>
        )
    }
    else
    {
        var onClose = () => {history.push('/')}
        return(
            <Modal isOpen={true} onClose={onClose}>
                                <ModalOverlay></ModalOverlay>
                                <ModalContent backgroundColor="#AACDBE" color="#222244" border="none">
                                    <ModalHeader paddingTop="4vh" borderBottom="2px solid #1c1c2bc2" margin="0 1vw" textAlign="center">
                                    <h2>Some Error Occurred</h2></ModalHeader>
                                    <ModalCloseButton></ModalCloseButton>
                                    <ModalBody>
                                        <p>Kindly check if the link is correct</p>
                                    </ModalBody>
                                </ModalContent>
                            </Modal>
        )
    }
}

export default Verify