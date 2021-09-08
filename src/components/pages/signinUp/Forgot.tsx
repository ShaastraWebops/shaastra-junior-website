import React from 'react'
import CustomBox from "../../shared/CustomBox";
import "../../../styles/signin.css"
import Particles from 'react-tsparticles';
import particlesConfig from "./particles.json"

import {Flex, Image, Box, Button, Link} from "@chakra-ui/react"
import { useLoginMutation, useGetProfileQuery, UserRole, useResetPasswordMutation, ReqForgotPassVerificationMutation } from '../../../types/generated/generated';
import { useState } from 'react';
import {useHistory } from 'react-router';
import {getRole } from './Context';
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
  } from "@chakra-ui/react"
// const makeProvider = (role: UserRole) =>
// {
//     return(
//         <Role.Provider value={{role}}>
//             {props.children}
//         </Role.Provider>
//     )
// }


const Forgot = () => {
    const [input,setEmail] = useState<RequestForgotPassInput>();
    const [reqForgotPassVerificationMutation, { data, loading, error }] = useReqForgotPassVerificationMutation()

    const history = useHistory()

    const emailHandler = (e : any) => {setEmail({email: e.target.value})}

    var {isOpen, onOpen, onClose} = useDisclosure()

    // const forgotPw = async () => {
    //     const [resetPasswordMutation, {data,loading,error}] = useResetPasswordMutation()
    //     // const resp = await resetPasswordMutation({variables: {token: , newPassword: }})
    // }

    return(
        <CustomBox>
            <Box width="100vw" height="100vh" className="sign" backgroundColor="#222244d2" display="flex" alignItems="center">
            <Particles id="particles-js" params={particlesConfig}></Particles>
                <Flex width="fit-content" margin="auto" height="60vh" alignItems="center" zIndex="2" className="sign-flex">
                    <Box width="40vw" padding="0 1.8vw" backgroundColor="#aedbecc2" height="100%" className="sign-intro"
                    display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                        <h1>Welcome to <span>SHAASTRA JUNIORS</span></h1>
                    </Box>
                    <form onSubmit={async (e) => {
                        e.preventDefault();
                        await reqForgotPassVerificationMutation({variables: {email: input!}});
                        if(data?.reqForgotPassVerification === true) history.push('/')
                        else 
                        {
                            isOpen = true;
                            return(
                            <Modal isOpen={isOpen} onClose={onClose}>
                                <ModalOverlay></ModalOverlay>
                                <ModalContent backgroundColor="#AACDBE" color="#222244">
                                    <ModalHeader paddingTop="4vh" borderBottom="2px solid #1c1c2bc2" margin="0 1vw" textAlign="center">
                                    <h2>Some Error Occurred</h2></ModalHeader>
                                    <ModalCloseButton></ModalCloseButton>
                                    <ModalBody>
                                        <p>Kindly if you have entered the registered email ID</p>
                                    </ModalBody>
                                </ModalContent>
                            </Modal>
                            )
                        }
                    }}>
                        <Flex width="90%" justifyContent="space-between" className="sign-input"> 
                            <Flex flexDirection="column" height="15vh" justifyContent="space-between">
                                <label htmlFor="username">Email ID</label>
                            </Flex>
                            <Flex flexDirection="column" height="15vh" justifyContent="space-between" className="sign-input">
                                <input type="text" name="username" onChange={emailHandler} />
                            </Flex>
                        </Flex>
                        <button>Send link to reset password</button>
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