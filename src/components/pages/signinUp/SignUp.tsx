import React from 'react'
import CustomBox from "../../shared/CustomBox";
import "../../../styles/signin.css"
import Particles from 'react-tsparticles';
import particlesConfig from "./particles.json"

import {Flex, Image, Box} from "@chakra-ui/react"
import { useCreateUserMutation } from '../../../types/generated/generated';
import { useState } from 'react-router/node_modules/@types/react';
import { Standard } from '../../../types/generated/generated';
import { Redirect} from 'react-router';

const SignUp = () => {

    const {Kids, First, Second, Third, Fourth, Fifth, Sixth, Seventh, Eigth, Ninth, Tenth, Eleventh, Twelfth} = Standard
    const [createUserMutation, {data,loading,error}] = useCreateUserMutation(); 
    const [email,setEmail] = useState("")
    const [pw,setPw] = useState("")
    const [checkPw,setCheckPw] = useState("")
    const [name,setName] = useState("")
    const [school, setSchool] = useState("")
    const [standard, setStandard] = useState<Standard>(Kids)


    const emailHandler = (e:any) => { setEmail(e.target.value) }
    const pwHandler = (e:any) => { setPw(e.target.value) }
    const repeatPwHandler = (e:any) => {setCheckPw(e.target.value)}
    const nameHandler = (e:any) => {setName(e.target.value)}
    const schoolHandler = (e:any) => {setSchool(e.target.value)}
    const classHandler = (e:any) => {
        switch(e.target.value)
        {
            case 'KIDS': setStandard(Kids); break;
            case 'FIRST': setStandard(First); break;
            case 'SECOND': setStandard(Second); break;
            case 'THIRD': setStandard(Third); break;
            case 'FOURTH': setStandard(Fourth); break;
            case 'FIFTH': setStandard(Fifth); break;
            case 'SIXTH': setStandard(Sixth); break;
            case 'SEVENTH': setStandard(Seventh); break;
            case 'EIGTH': setStandard(Eigth); break;
            case 'NINTH': setStandard(Ninth); break;
            case 'TENTH': setStandard(Tenth); break;
            case 'ELEVENTH': setStandard(Eleventh); break;
            default: setStandard(Twelfth);
            
        }
    }

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
                    <form action="" onSubmit={async () => {
                        if(pw === checkPw)
                        {
                            const resp = await createUserMutation({variables: {
                                createUserData: {
                                    name: name,
                                    email: email,
                                    password: pw,
                                    school: school,
                                    class: standard
                                }
                            }})
                            return(<Redirect to="/"></Redirect>)
                        }
                    }}>
                        <Flex width="90%" justifyContent="space-between"> 
                            <Flex flexDirection="column" height="20vh" justifyContent="space-between" className="sign-input">
                                <label htmlFor="name">Name</label>
                                <label htmlFor="username">Username</label>
                                <label htmlFor="password">Password</label>
                                <label htmlFor="passwordR">Repeat password</label>
                                <label htmlFor="school">School</label>
                                <label htmlFor="class">Class</label>
                            </Flex>
                            <Flex flexDirection="column" height="20vh" justifyContent="space-between" className="sign-input">
                                <input type="text" name="name" onChange={nameHandler}/>
                                <input type="text" name="username" onChange={emailHandler}  />
                                <input type="password" name="password" onChange={pwHandler} /> 
                                <input type="password" name="passwordR" onChange={repeatPwHandler} />
                                <input type="text" name="school" onChange={schoolHandler} />
                                <select name="class" id="class" onSelect={classHandler}>
                                    <option value="KIDS">Kids</option>
                                    <option value="FIRST">First</option>
                                    <option value="SECOND">Second</option>
                                    <option value="THIRD">Third</option>
                                    <option value="FOURTH">Fourth</option>
                                    <option value="FIFTH">Fifth</option>
                                    <option value="SIXTH">Sixth</option>
                                    <option value="SEVENTH">Seventh</option>
                                    <option value="EIGTH">Eight</option>
                                    <option value="NINTH">Ninth</option>
                                    <option value="TENTH">Tenth</option>
                                    <option value="ELEVENTH">Eleventh</option>
                                    <option value="TWELTH">Twelth</option>
                                </select>
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