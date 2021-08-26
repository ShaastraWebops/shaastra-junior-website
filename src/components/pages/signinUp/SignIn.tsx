import React from 'react'
import CustomBox from "../../shared/CustomBox";
import "../../../styles/signin.css"


import {Flex, Image, Box} from "@chakra-ui/react"

const SignIn = () => {

    return(
        <CustomBox>
            <Box width="100vw" height="100vh" className="sign" backgroundColor="#6a6a85b6">
                <Flex width="85vw" margin="auto" height="100%" alignItems="center">
                    <Box width="50%" padding="0 1vw" marginRight="1.5vw">
                        <h1>Welcome to SHAASTRA JUNIORS</h1>
                        <p>New User? <a href="">Sign Up</a></p>
                    </Box>
                    <form action="">
                        <Flex width="30vw" justifyContent="space-between">
                        <label htmlFor="username">Username</label>
                        <input type="text"  />
                        </Flex>
                        <Flex width="30vw" justifyContent="space-between" margin="4vh 0">
                        <label htmlFor="password">Password</label>
                        <input type="password" />
                        </Flex>
                        <button>SUBMIT</button>
                    </form>
                </Flex>
            </Box>
        </CustomBox>
    )
}

export default SignIn