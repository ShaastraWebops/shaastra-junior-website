import React, { useContext } from 'react'
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
import { Usercontext } from './Context';
import sj_logo from "../../../images/home/sj_logo_color_tr.png";

import bcrypt from 'bcryptjs'

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
    const {setRole} = useContext(Usercontext);
    const [logged, setLogged] = useState(false)
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
      console.log(Error)
    // const forgotPw = async () => {
    //     const [resetPasswordMutation, {data,loading,error}] = useResetPasswordMutation()
    //     // const resp = await resetPasswordMutation({variables: {token: , newPassword: }})
    // }
    const onClose = () => {history.push('/')}
    return(
        <CustomBox>
            <Box width="100vw" height="calc(100vh - 92px)" className="sign" backgroundColor="#AACDBE" zIndex="-2"
            display="flex" alignItems="center">
            {/* <Particles id="particles-js" params={particlesConfig}></Particles> */}
                <Flex width="fit-content" margin="auto" height="60vh" alignItems="center" boxShadow="0px 0px 15px 0px #1c1c2b80"
                zIndex="2" className="sign-flex sign-h">
                    <Box width="40vw" padding="0 1.8vw" backgroundColor="#b0dbbe" height="100%" className="sign-intro"
                    display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                        <Image src={sj_logo} width={"60%"}/>
                        <p>New User? <a href="/signup"><span>Sign Up</span></a></p>
                        <p>Didn't recieve verification email? <a href=""> <span>Click here</span> </a> </p>
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
                           setRole(resp.data.login.role)
                           const role = await bcrypt.hash(resp.data.login.role,10)

                           localStorage.setItem('role', role)
                           localStorage.setItem('name', resp.data.login.name)
                           localStorage.setItem('school', resp.data.login.school)

                            setLogged(true)
                            history.push("/")
                       }
                       if(resp.errors) setError(true)
                        }catch(err) {
                            setError(true)
                        }
                    }}>
                        <Flex width="75%" margin="0 auto" marginBottom="2vh" justifyContent="space-between" className="sign-input"> 
                            <Flex flexDirection="column" height="12vh" justifyContent="space-between" className="sign-input">
                                <label htmlFor="username">Email ID</label>
                                <label htmlFor="password">Password</label>
                            </Flex>
                            <Flex flexDirection="column" height="12vh" justifyContent="space-between" className="sign-input">
                                <input required type="email" name="username" onChange={emailHandler} />
                                <input required type="password" name="password" onChange={pwHandler}/> 
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
                        
                        Error === true ? 
                        error?.message === "Oops, email not verified!"  ? <Modal isOpen={true} onClose={onClose}>
                        <ModalOverlay></ModalOverlay>
                        <ModalContent backgroundColor="#AACDBE" color="#222244">
                            
                            <ModalCloseButton onClick={onClose}></ModalCloseButton>
                            <ModalBody height="100px">
                                <p>{error?.message} Please check your registered email ID for link for verification</p>
                               
                            </ModalBody>
                        </ModalContent>
                    </Modal> : 
                    <Modal isOpen={true} onClose={onClose}>
                    <ModalOverlay></ModalOverlay>
                    <ModalContent backgroundColor="#AACDBE" color="#222244">
                        <ModalCloseButton onClick={onClose}></ModalCloseButton>
                        <ModalBody >
                            <p>{error?.message}</p>
                        </ModalBody>
                    </ModalContent>
                    </Modal>
                    :
                    null
                    }
                </Flex>

                <div className="sign-hidden">
                <Flex width="fit-content" margin="auto" height="60vh" alignItems="center" boxShadow="0px 0px 15px 0px #1c1c2b80"
                zIndex="2" flexDirection="column" className="sign-flex">
                    <Box width="40vw" padding="0 1.8vw" backgroundColor="#b0dbbe" height="50%" className="sign-intro"
                    display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                        <Image src={sj_logo} width={"50%"}/>
                        
                        {/* <Link border="none" backgroundColor="transparent" width="fit-content" margin="auto" to="/forgot/">
                                Forgot Pasword
                        </Link> */}
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
                            setLogged(true);
                            history.push("/")
                        }
                        // if(!resp.data?.login?.isVerified)
                        // {
                        //     setError("Not verified")
                        // }
                        if(resp.errors) setError(true)
                         }catch(err) {
                             setError(true)
                         }
                        
                    }}>
                        <Flex width="75%" margin="0 auto" paddingTop="4vh" marginBottom="2vh" justifyContent="space-between" className="sign-input"> 
                            <Flex flexDirection="column" height="12vh" justifyContent="space-between" className="sign-input">
                                <label htmlFor="username">Email ID</label>
                                <label htmlFor="password">Password</label>
                            </Flex>
                            <Flex flexDirection="column" height="12vh" justifyContent="space-between" className="sign-input">
                                <input required type="email" name="username" onChange={emailHandler} />
                                <input required type="password" name="password" onChange={pwHandler}/> 
                            </Flex>
                        </Flex>
                        <Flex width="80%" margin="auto" alignItems="center" justifyContent="space-between">
                        <input type="submit" value="Log In" className="submit" />
                        <p>New User? <a href="/signup"><span>Sign Up</span></a></p>
                        </Flex>
                        <span> <a href="/forgot">Forgot Password</a> </span>
                        {/* <Flex width="100%" justifySelf="flex-end" alignItems="center" justifyContent="center">
                            <Link border="none" backgroundColor="transparent" width="fit-content" margin="auto" to="/forgot/">
                                Forgot Pasword
                            </Link>
                            <button>LOGIN</button>
                        </Flex> */}
                    </form>
                    {
                       Error == true ? 
                       (error?.message === "Oops, email not verified!"  ? <Modal isOpen={true} onClose={onClose} >
                       <ModalOverlay></ModalOverlay>
                       <ModalContent backgroundColor="#AACDBE" color="#222244">
                           <ModalCloseButton onClick={onClose}></ModalCloseButton>
                           <ModalBody height="100px">
                               <p>{error?.message} <br /> Please check your registered email ID for link for verification</p>
                              
                           </ModalBody>
                       </ModalContent>
                   </Modal> : 
                   <Modal isOpen={true} onClose={onClose}>
                   <ModalOverlay></ModalOverlay>
                   <ModalContent backgroundColor="#AACDBE" color="#222244">
                       <ModalCloseButton onClick={onClose}></ModalCloseButton>
                       <ModalBody >
                           <p>{error?.message}</p>
                       </ModalBody>
                   </ModalContent>
                   </Modal>)
                   :
                   null
                    }
                </Flex>
                    </div>
                    {/* {
                        logged===true ?
                        <Modal isOpen={true} onClose={onClose}>
                        <ModalOverlay></ModalOverlay>
                        <ModalContent backgroundColor="#AACDBE" color="#222244" border="none">
                            <ModalBody paddingTop="4vh" borderBottom="2px solid #1c1c2bc2" margin="0 1vw" textAlign="center">
                            <h2>Hello {localStorage.getItem("name")}</h2>
                            </ModalBody>
                            <ModalCloseButton></ModalCloseButton>
                        </ModalContent>
                    </Modal> : null
                    } */}
            </Box>
        </CustomBox>
    )
}

// export function Provider(props:any)
// {
//     makeProvider()
// }


export default SignIn