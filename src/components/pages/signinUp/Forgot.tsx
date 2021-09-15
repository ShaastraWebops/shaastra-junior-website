import React from 'react'
import CustomBox from "../../shared/CustomBox";
import "../../../styles/signin.css"
import Particles from 'react-tsparticles';
import particlesConfig from "./particles.json"

import {Flex, Image, Box, Button, Link} from "@chakra-ui/react"
import { useLoginMutation, useGetProfileQuery, UserRole, useResetPasswordMutation, ReqForgotPassVerificationMutation } from '../../../types/generated/generated';
import { useState } from 'react';
import {useHistory } from 'react-router-dom';
import { useReqForgotPassVerificationMutation, RequestForgotPassInput } from '../../../types/generated/generated';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure
  } from "@chakra-ui/react";
import sj_logo from "../../../images/home/sj_logo_color_tr.png";



const Forgot = () => {
    const [input,setEmail] = useState<RequestForgotPassInput>();
    const [reqForgotPassVerificationMutation, { data, loading, error }] = useReqForgotPassVerificationMutation()
    const [verify, setVerify] = useState("")

    const history = useHistory()

    const emailHandler = (e : any) => {setEmail({email: e.target.value})}

    var {isOpen, onOpen, onClose} = useDisclosure()

    onClose = () => {history.push('/')}

    return(
        <CustomBox>
            <Box width="100vw" height="calc(100vh - 92px)" className="sign" backgroundColor="#AACDBE"  display="flex" alignItems="center">
            {/* <Particles id="particles-js" params={particlesConfig}></Particles> */}
                <Flex width="fit-content" margin="auto" height="60vh" alignItems="center" boxShadow="0px 0px 15px 0px #1c1c2b80"
                zIndex="2" className="sign-flex forgot-main">
                    <Box width="40vw" padding="0 1.8vw" backgroundColor="#b0dbbe" height="100%" className="sign-intro"
                    display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                        <Image src={sj_logo} width={"50%"}/>
                    </Box>
                    <form onSubmit={async (e) => {
                        e.preventDefault();
                        try
                        {
                            const resp = await reqForgotPassVerificationMutation({variables: {email: input!}});
                            console.log(resp)
                            if(resp.data?.reqForgotPassVerification === true) 
                            {
                                setVerify("true")
                            }
                        }
                        catch(err)
                        {
                            setVerify("Please check if you entered a registered email")
                        }
                    }}>
                        <Flex width="80%" margin="0 auto" justifyContent="center" alignItems="center" className="sign-input forgot" height="fit-content"> 
                            <Flex flexDirection="column" height="15vh" margin="auto" justifyContent="space-between" className="sign-input">
                                <label htmlFor="username">Email ID</label>
                            </Flex>
                            <Flex flexDirection="column" height="15vh" justifyContent="space-between" className="sign-input">
                                <input required type="text" name="username" onChange={emailHandler} />
                            </Flex>
                        </Flex>
                        <input type="submit" value="Send link to reset password" className="submit" />
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
                </Flex>
            </Box>
        </CustomBox>
    )
}

// export function Provider(props:any)
// {
//     makeProvider()
// }


export default Forgot