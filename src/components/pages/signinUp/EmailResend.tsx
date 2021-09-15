import { Text } from '@chakra-ui/react'
import React from 'react'
import {useState} from "react"
import { useHistory } from 'react-router'
import {RequestForgotPassInput, useReqForgotPassVerificationMutation, useResendVerificationMailMutation} from "../../../types/generated/generated"
import {Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, ModalHeader, useDisclosure} from "@chakra-ui/react"

interface Props {
    
}

const EmailResend = (props: Props) => {
    const [input, setEmail] = useState<RequestForgotPassInput>()
    const emailHandler = (e:any) => {setEmail({email: e.target.value})}
    const [verify, setVerify] = useState("")
    const [reqForgotPassVerificationMutation, { data, loading, error }] = useResendVerificationMailMutation()

    var {isOpen, onOpen, onClose} = useDisclosure()
    const history = useHistory()
    onClose = () => {history.push('/')}

    return (
        <div className="email-resend-page">
            <div className="email-resend-head">EMAIL RESEND</div>
            <div className="email-resend-container">
                <div>Enter your email to recieve the verification link</div>
                <form className="email-resend-form" id="email-resend"
                onSubmit={async (e) => {
                    e.preventDefault();
                    try
                    {
                        const resp = await reqForgotPassVerificationMutation({variables: {email: input!}});
                        if(resp.data?.resendVerificationMail === true) 
                        {
                            console.log("y")
                            setVerify("true")
                            
                        }
                        else 
                        {
                            setVerify("Please check if you entered a registered email")
                        }
                    }
                    catch(err)
                    {
                        setVerify("Please check if you entered a registered email")
                    }
                        
                    } }>
                    <input className="email-resend-input" type="email" placeholder="Enter your registered email" onChange={emailHandler} />
                    {/* <button  className="email-resend-submit" type="submit" form="email-resend">Submit</button> */}
                    <input type="submit" value="submit"  className="email-resend-submit"  />
                    {
                        verify!= "" ?
                        verify==="true" ? <Modal isOpen={true} onClose={onClose}>
                        <ModalOverlay></ModalOverlay>
                        <ModalContent backgroundColor="#AACDBE" zIndex="10000000" color="#222244">
                            <ModalCloseButton></ModalCloseButton>
                            <ModalBody>
                                <p>Email has been sent!</p>
                            </ModalBody>
                        </ModalContent>
                    </Modal>
                    :
                    <Modal isOpen={true} onClose={onClose}>
                        <ModalOverlay></ModalOverlay>
                        <ModalContent backgroundColor="#AACDBE" color="#222244" zIndex="10000000">
                            <ModalCloseButton></ModalCloseButton>
                            <ModalBody>
                                <p>{verify}</p>
                            </ModalBody>
                        </ModalContent>
                    </Modal>

                    : null
                    }
                </form>
            </div>
        </div>
    )
}

export default EmailResend
