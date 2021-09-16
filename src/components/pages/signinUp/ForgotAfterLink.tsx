import React from 'react'
import CustomBox from "../../shared/CustomBox";
import "../../../styles/signin.css"
import Particles from 'react-tsparticles';
import particlesConfig from "./particles.json"

import {Flex, Image, Box, Modal,ModalCloseButton,ModalContent,ModalHeader,ModalBody,useDisclosure,ModalOverlay} from "@chakra-ui/react"
import { ResetPasswordInput, useResetPasswordMutation } from '../../../types/generated/generated';
import { useState } from 'react';
import { InfoIcon } from '@chakra-ui/icons';
import {  useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import sj_logo from "../../../images/home/sj_logo_color_tr.png";


// const makeProvider = (role: UserRole) =>
// {
//     return(
//         <Role.Provider value={{role}}>
//             {props.children}
//         </Role.Provider>
//     )
// }


const ForgotAfter = () => {

    const [pw,setPw] = useState("");
    const {token} = useParams<{token: string}>();
    const [resetPasswordMutation, { data, loading, error }] = useResetPasswordMutation()
    const [input,setInput] = useState<ResetPasswordInput>()
    var {isOpen,onOpen,onClose} = useDisclosure()

    const history = useHistory()

    const pwHandler = (e:any) => {setPw(e.target.value)} 
    const [verify, setVerify] = useState("")
    return(
        <CustomBox>
            <Box width="100vw" height="100vh" className="sign" backgroundColor="#AACDBE"  display="flex" alignItems="center">
            {/* <Particles id="particles-js" params={particlesConfig}></Particles> */}
                <Flex width="fit-content" margin="auto" height="60vh" alignItems="center" boxShadow="0px 0px 15px 0px #1c1c2b80"
                zIndex="2" className="sign-flex forgot-main">
                    <Box width="40vw" padding="0 1.8vw" backgroundColor="#b0dbbe" height="100%" className="sign-intro"
                    display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                        <Image src={sj_logo} width={"50%"}/>
                    </Box>
                    <form action="" onSubmit={async (e) => {
                        e.preventDefault();
                        try{
                            const resp = await resetPasswordMutation({variables : {data: {
                                token: token,
                                newPassword: pw
                            }}})
                            if(resp.data?.resetPassword === true)
                            {
                            history.push('/signin')
                            }
                        }
                        catch(err)
                        {
                            setVerify("true")
                        }
                    }}>
                        <Flex width="85%" margin="auto" justifyContent="space-between" className="sign-input forgot"> 
                            <Flex flexDirection="column" height="15vh" justifyContent="space-between">
                                <label htmlFor="username">New Passowrd</label>
                            </Flex>
                            <Flex flexDirection="column" height="15vh" justifyContent="space-between" className="sign-input">
                                <input type="text" name="username" onChange={pwHandler} />
                            </Flex>
                        </Flex>
                        <input type="submit" value="Reset Password" className="submit" />
                        {
                            verify === "true" ? <Modal isOpen={isOpen} onClose={onClose}>
                            <ModalOverlay></ModalOverlay>
                            <ModalContent backgroundColor="#AACDBE" color="#222244">
                                <ModalCloseButton></ModalCloseButton>
                                <ModalBody>
                                    <p>{error?.message}</p>
                                </ModalBody>
                            </ModalContent>
                        </Modal> : null
                        }
                    </form>
                </Flex>
            </Box>
        </CustomBox>
    )
}
 export default ForgotAfter
