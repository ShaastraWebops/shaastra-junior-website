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
            <Box width="100vw" height="100vh" className="sign" backgroundColor="#AACDBE"  display="flex" alignItems="center">
            <Particles id="particles-js" params={particlesConfig}></Particles>
                <Flex width="fit-content" margin="auto" height="60vh" alignItems="center" boxShadow="0px 0px 15px 0px #1c1c2b80"
                zIndex="2" className="sign-flex forgot-main">
                    <Box width="40vw" padding="0 1.8vw" backgroundColor="#b0dbbe" height="100%" className="sign-intro"
                    display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                        <h1>Welcome to <br /> <span>SHAASTRA JUNIORS</span></h1>
                    </Box>
                    <form onSubmit={async (e) => {
                        e.preventDefault();
                        const resp = await reqForgotPassVerificationMutation({variables: {email: input!}});
                        console.log(resp.errors)
                        if(resp.errors) 
                        return(
                            <Modal isOpen={true} onClose={onClose}>
                                <ModalOverlay></ModalOverlay>
                                <ModalContent backgroundColor="#AACDBE" color="#222244">
                                    <ModalHeader paddingTop="4vh" borderBottom="2px solid #1c1c2bc2" margin="0 1vw" textAlign="center">
                                    <h2>Some Error Occurred</h2></ModalHeader>
                                    <ModalCloseButton></ModalCloseButton>
                                    <ModalBody>
                                        <p>Kindly check if you have entered the registered email ID</p>
                                    </ModalBody>
                                </ModalContent>
                            </Modal>
                            )
                        if(resp.data?.reqForgotPassVerification === true) history.push('/')
                        else 
                        {
                            console.log(error)
                            return(
                            <Modal isOpen={true} onClose={onClose}>
                                <ModalOverlay></ModalOverlay>
                                <ModalContent backgroundColor="#AACDBE" color="#222244">
                                    <ModalHeader paddingTop="4vh" borderBottom="2px solid #1c1c2bc2" margin="0 1vw" textAlign="center">
                                    <h2>Some Error Occurred</h2></ModalHeader>
                                    <ModalCloseButton></ModalCloseButton>
                                    <ModalBody>
                                        <p>Kindly check if you have entered the registered email ID</p>
                                    </ModalBody>
                                </ModalContent>
                            </Modal>
                            )
                        }
                    }}>
                        <Flex width="80%" margin="0 auto" justifyContent="center" alignItems="center" className="sign-input forgot" height="fit-content"> 
                            <Flex flexDirection="column" height="15vh" margin="auto" justifyContent="space-between" className="sign-input">
                                <label htmlFor="username">Email ID</label>
                            </Flex>
                            <Flex flexDirection="column" height="15vh" justifyContent="space-between" className="sign-input">
                                <input type="text" name="username" onChange={emailHandler} />
                            </Flex>
                        </Flex>
                        <input type="submit" value="Send link to reset password" className="submit" />
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