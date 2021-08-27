import React from 'react'
import CustomBox from "../../shared/CustomBox";
import "../../../styles/signin.css"
import Particles from 'react-tsparticles';
import particlesConfig from "./particles.json"

import {Flex, Image, Box} from "@chakra-ui/react"

const SignUp = () => {

    return(
        <CustomBox>
            <Box width="100vw" height="100vh" className="sign" backgroundColor="#222244d2" display="flex" alignItems="center">
            <Particles id="particles-js" params={particlesConfig}></Particles>
                <Flex width="fit-content" margin="auto" height="60vh" alignItems="center" zIndex="2" className="sign-flex">
                    <Box width="40vw" padding="0 1.8vw" backgroundColor="#aedbecc2" height="100%" className="sign-intro"
                    display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                        <h1>Welcome to <span>SHAASTRA JUNIORS</span></h1>
                        <p>Registered? <a href="/signin"><span>Sign In</span></a></p>
                    </Box>
                    <form action="">
                        <Flex width="90%" justifyContent="space-between"> 
                            <Flex flexDirection="column" height="20vh" justifyContent="space-between" className="sign-input">
                                <label htmlFor="username">Username</label>
                                <label htmlFor="password">Password</label>
                                <label htmlFor="passwordR">Repeat password</label>
                            </Flex>
                            <Flex flexDirection="column" height="20vh" justifyContent="space-between" className="sign-input">
                                <input type="text" name="username"  />
                                <input type="password" name="password" /> 
                                <input type="password" name="passwordR" />
                            </Flex>
                        </Flex>
                            <button>SIGN UP</button>
                        {/* <Flex width="30vw" justifyContent="space-around">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username"  />
                        </Flex>
                        <Flex width="30vw" justifyContent="space-around" margin="4vh 0">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" />
                        </Flex>
                        <Flex width="30vw" justifyContent="space-around" margin="4vh 0">
                        <label htmlFor="passwordR">Repeat password</label>
                        <input type="password" name="passwordR" />
                        </Flex> */}
                        {/* <button>SIGN UP</button> */}
                    </form>
                </Flex>
            </Box>
        </CustomBox>
    )
}

export default SignUp