import React from 'react'
import CustomBox from "../../shared/CustomBox";
import "../../../styles/signin.css"
import Particles from 'react-tsparticles';
import particlesConfig from "./particles.json"

import {Flex, Image, Box, Button, Link} from "@chakra-ui/react"
import { useLoginMutation, useGetProfileQuery, UserRole, useResetPasswordMutation } from '../../../types/generated/generated';
import { useState } from 'react';
import { InfoIcon } from '@chakra-ui/icons';
import { Redirect, useHistory } from 'react-router-dom';
import {getRole } from './Context';

// const makeProvider = (role: UserRole) =>
// {
//     return(
//         <Role.Provider value={{role}}>
//             {props.children}
//         </Role.Provider>
//     )
// }


const SignIn = () => {
    const [login, setLoginData] = useState({email: "", password: ""})
    const [email,setEmail] = useState("");
    const [pw,setPw] = useState("");
    const [loginMutation, {data,error,loading}] = useLoginMutation()

    const history = useHistory()

    const emailHandler = (e : any) => {setEmail(e.target.value)}
    const pwHandler = (e:any) => {setPw(e.target.value)} 

    // const forgotPw = async () => {
    //     const [resetPasswordMutation, {data,loading,error}] = useResetPasswordMutation()
    //     // const resp = await resetPasswordMutation({variables: {token: , newPassword: }})
    // }

    return(
        <CustomBox>
            <Box width="100vw" height="100vh" className="sign" backgroundColor="#AACDBE" 
            display="flex" alignItems="center">
            <Particles id="particles-js" params={particlesConfig}></Particles>
                <Flex width="fit-content" margin="auto" height="60vh" alignItems="center" boxShadow="0px 0px 15px 0px #1c1c2b80"
                zIndex="2" className="sign-flex">
                    <Box width="40vw" padding="0 1.8vw" backgroundColor="#b0dbbe" height="100%" className="sign-intro"
                    display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                        <h1>Welcome to <span>SHAASTRA JUNIORS</span></h1>
                        <p>New User? <a href="/signup"><span>Sign Up</span></a></p>
                        {/* <Link border="none" backgroundColor="transparent" width="fit-content" margin="auto" to="/forgot/">
                                Forgot Pasword
                        </Link> */}
                       <span> <a href="/forgot">Forgot Password</a> </span>
                    </Box>
                    <form action="" onSubmit={async (e) => {
                        e.preventDefault();
                        setLoginData({email:email, password:pw});
                        const resp = await loginMutation({variables: {loginData: login}});
                        if(resp.data?.login?.isVerified)
                        {
                            // makeProvider(resp.data.login.role)
                            getRole( resp.data.login.role, resp.data.login.name)
                            // if(resp.data.login.role === 'USER')
                            // history.push(`/${resp.data.login.name}`)
                            // else history.push(`/admin`)
                            history.push(``)
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
                        <button>LOGIN</button>
                        {/* <Flex width="100%" justifySelf="flex-end" alignItems="center" justifyContent="center">
                            <Link border="none" backgroundColor="transparent" width="fit-content" margin="auto" to="/forgot/">
                                Forgot Pasword
                            </Link>
                            <button>LOGIN</button>
                        </Flex> */}
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


export default SignIn