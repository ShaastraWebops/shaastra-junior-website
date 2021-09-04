import React from 'react'
import CustomBox from "../../shared/CustomBox";
import "../../../styles/signin.css"
import Particles from 'react-tsparticles';
import particlesConfig from "./particles.json"

import {Flex, Image, Box, Button} from "@chakra-ui/react"
import { useLoginMutation, useGetProfileQuery } from '../../../types/generated/generated';
import { useState } from 'react-router/node_modules/@types/react';
import { getTsBuildInfoEmitOutputFilePath } from 'typescript';
import { InfoIcon } from '@chakra-ui/icons';
import { Redirect } from 'react-router';

const SignIn = () => {
    const [login, setLoginData] = useState({email: "", password: ""})
    const [email,setEmail] = useState("");
    const [pw,setPw] = useState("");
    const [loginMutation, {data,error,loading}] = useLoginMutation()

    const emailHandler = (e : any) => {setEmail(e.target.value)}
    const pwHandler = (e:any) => {setPw(e.target.value)} 

    const Info = () => {

    }

    return(
        <CustomBox>
            <Box width="100vw" height="100vh" className="sign" backgroundColor="#222244d2" display="flex" alignItems="center">
            <Particles id="particles-js" params={particlesConfig}></Particles>
                <Flex width="fit-content" margin="auto" height="60vh" alignItems="center" zIndex="2" className="sign-flex">
                    <Box width="40vw" padding="0 1.8vw" backgroundColor="#aedbecc2" height="100%" className="sign-intro"
                    display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                        <h1>Welcome to <span>SHAASTRA JUNIORS</span></h1>
                        <p>New User? <a href="/signup"><span>Sign Up</span></a></p>
                    </Box>
                    <form action="" onSubmit={async (e) => {
                        e.preventDefault();
                        setLoginData({email:email, password:pw});
                        const resp = await loginMutation({variables: {loginData: login}});
                        if(resp.data?.login?.isVerified)
                        {
                           
                            // const {data,loading,error} = useGetProfileQuery()
                            // data?.me
                            return(<Redirect to={`/${resp.data.login.name}`} />)
                        }
                    }}>
                        <Flex width="90%" justifyContent="space-between" className="sign-input"> 
                            <Flex flexDirection="column" height="15vh" justifyContent="space-between">
                                <label htmlFor="username">Email ID</label>
                                <label htmlFor="password">Password</label>
                            </Flex>
                            <Flex flexDirection="column" height="15vh" justifyContent="space-between" className="sign-input">
                                <input type="text" name="username" onChange={emailHandler} />
                                <input type="password" name="password" onChange={pwHandler}/> 
                            </Flex>
                        </Flex>
                        <Button border="none" backgroundColor="transparent" width="fit-content" margin="auto" >Forgot Pasword</Button>
                        <button>LOGIN</button>
                    </form>
                </Flex>
            </Box>
        </CustomBox>
    )
}

export default SignIn