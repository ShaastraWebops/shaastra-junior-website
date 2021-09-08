import React from 'react'
import CustomBox from "../../shared/CustomBox";
import "../../../styles/signin.css"
import Particles from 'react-tsparticles';
import particlesConfig from "./particles.json"
import {Modal, ModalOverlay, ModalHeader, ModalContent, ModalCloseButton, ModalBody, useDisclosure} from "@chakra-ui/react"
import {Flex, Image, Box, Button, Link} from "@chakra-ui/react"
import { useLoginMutation, useGetProfileQuery, UserRole, useResetPasswordMutation, LoginInput } from '../../../types/generated/generated';
import { useState } from 'react';
import { InfoIcon } from '@chakra-ui/icons';
import { Redirect, useHistory } from 'react-router-dom';
import {onError} from "@apollo/client/link/error"

// const makeProvider = (role: UserRole) =>
// {
//     return(
//         <Role.Provider value={{role}}>
//             {props.children}
//         </Role.Provider>
//     )
// }


const SignIn = () => {
    const [login, setLoginData] = useState<LoginInput>({email: "", password: ""})
    const [email,setEmail] = useState("");
    const [pw,setPw] = useState("");
    const [loginMutation, {data,error,loading}] = useLoginMutation()
    const {isOpen, onOpen} = useDisclosure()
    const [Error, setError] = useState(false)

    const history =useHistory();
    const emailHandler = (e : any) => {
        setEmail(e.target.value) 
        console.log(email)}
    const pwHandler = (e:any) => {setPw(e.target.value)} 

    const errorLink = onError(({ graphQLErrors, networkError }) => {
        if (graphQLErrors)
          graphQLErrors.forEach(({ message, locations, path }) =>
            console.log(
              `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
            ),
          );
      
        if (networkError) console.log(`[Network error]: ${networkError}`);
      });

    // const forgotPw = async () => {
    //     const [resetPasswordMutation, {data,loading,error}] = useResetPasswordMutation()
    //     // const resp = await resetPasswordMutation({variables: {token: , newPassword: }})
    // }
    const onClose = () => {history.push('/')}
    return(
        <CustomBox>
            <Box width="100vw" height="100vh" className="sign" backgroundColor="#AACDBE" 
            display="flex" alignItems="center">
            <Particles id="particles-js" params={particlesConfig}></Particles>
                <Flex width="fit-content" margin="auto" height="60vh" alignItems="center" boxShadow="0px 0px 15px 0px #1c1c2b80"
                zIndex="2" className="sign-flex">
                    <Box width="40vw" padding="0 1.8vw" backgroundColor="#b0dbbe" height="100%" className="sign-intro"
                    display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                        <h1>Welcome to <br /> <span>SHAASTRA JUNIORS</span></h1>
                        <p>New User? <a href="/signup"><span>Sign Up</span></a></p>
                        {/* <Link border="none" backgroundColor="transparent" width="fit-content" margin="auto" to="/forgot/">
                                Forgot Pasword
                        </Link> */}
                       <span> <a href="/forgot">Forgot Password</a> </span>
                    </Box>
                    <form action="" onSubmit={async (e) => {
                        e.preventDefault();
                        setLoginData({email:email, password:pw});
                        try
                        {
                            
                            const resp = await loginMutation({variables: {loginData: {email:email, password:pw}}});
                            console.log(resp)
                           
                              console.log(resp.errors)
                        if(resp.data?.login?.isVerified)
                        {
                            // makeProvider(resp.data.login.role)
                            // getRole( resp.data.login.role, resp.data.login.name)
                            // document.cookie += ";role=" + resp.data.login.role + ";path=/";
                            // console.log(document.cookie)
                            localStorage.setItem('role', resp.data.login.role)
                            localStorage.setItem('name', resp.data.login.name)
                            localStorage.setItem('school', resp.data.login.school)
                            // if(resp.data.login.role === 'USER')
                            // history.push(`/${resp.data.login.name}`)
                            // else history.push(`/admin`)
                            history.push('/')
                        }
                        if(!resp.data?.login?.isVerified || resp.errors)
                        {
                            setError(true)
                        }
                        } catch(error)
                        {
                            setError(true)
                        }
                        
                    }}>
                        <Flex width="75%" margin="0 auto" marginBottom="2vh" justifyContent="space-between" className="sign-input"> 
                            <Flex flexDirection="column" height="15vh" justifyContent="space-between">
                                <label htmlFor="username">Email ID</label>
                                <label htmlFor="password">Password</label>
                            </Flex>
                            <Flex flexDirection="column" height="15vh" justifyContent="space-between" className="sign-input">
                                <input type="text" name="username" onChange={emailHandler} />
                                <input type="password" name="password" onChange={pwHandler}/> 
                            </Flex>
                        </Flex>
                        <input type="submit" value="Log In" className="submit" />
                        {/* <Flex width="100%" justifySelf="flex-end" alignItems="center" justifyContent="center">
                            <Link border="none" backgroundColor="transparent" width="fit-content" margin="auto" to="/forgot/">
                                Forgot Pasword
                            </Link>
                            <button>LOGIN</button>
                        </Flex> */}
                    </form>
                    {
                        Error === true ? <Modal isOpen={true} onClose={onClose}>
                        <ModalOverlay></ModalOverlay>
                        <ModalContent backgroundColor="#AACDBE" color="#222244">
                            <ModalHeader paddingTop="4vh" borderBottom="2px solid #1c1c2bc2" margin="0 1vw" textAlign="center">
                            <h2>Some Error Occurred</h2></ModalHeader>
                            <ModalCloseButton onClick={onClose}></ModalCloseButton>
                            <ModalBody>
                                <p>Kindly check if the credentials are correct</p>
                            </ModalBody>
                        </ModalContent>
                    </Modal> : null
                    }
                </Flex>
            </Box>
        </CustomBox>
    )
}

// export function Provider(props:any)
// {
//     makeProvider()
// }


export default SignIn