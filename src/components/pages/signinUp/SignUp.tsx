import React from 'react'
import CustomBox from "../../shared/CustomBox";
import "../../../styles/signin.css"
import Particles from 'react-tsparticles';
import particlesConfig from "./particles.json"

import {Flex, Image, Box} from "@chakra-ui/react"
import { useCreateUserMutation, useGetProfileQuery } from '../../../types/generated/generated';
import { useState } from 'react';
import { Standard } from '../../../types/generated/generated';
import { useHistory,Redirect} from 'react-router-dom';


const SignUp = () => {

    const {Sixth, Seventh, Eigth, Ninth, Tenth, Eleventh, Twelfth} = Standard
    const [createUserMutation, {data,loading,error}] = useCreateUserMutation(); 
    const [email,setEmail] = useState("")
    const [pw,setPw] = useState("")
    const [checkPw,setCheckPw] = useState("")
    const [name,setName] = useState("")
    const [school, setSchool] = useState("")
    const [standard, setStandard] = useState<Standard>(Sixth)
    const history = useHistory()

    const emailHandler = (e:any) => { setEmail(e.target.value) }
    const pwHandler = (e:any) => { setPw(e.target.value) }
    const repeatPwHandler = (e:any) => {setCheckPw(e.target.value)}
    const nameHandler = (e:any) => {setName(e.target.value)}
    const schoolHandler = (e:any) => {setSchool(e.target.value)}
    const classHandler = (e:any) => {
        switch(e.target.value)
        {
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
            <Box width="100vw" height="100vh" className="sign" backgroundColor="#AACDBE" display="flex" alignItems="center">
            <Particles id="particles-js" params={particlesConfig}></Particles>
                <Flex width="fit-content" margin="auto" height="60vh" boxShadow="0px 0px 15px 0px #1c1c2b80"
                alignItems="center" zIndex="2" className="sign-flex sign-flex-up">
                    <Box width="40vw" padding="0 1.8vw"  height="100%" className="sign-intro" backgroundColor="#b0dbbe"
                    display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                        <h1>Welcome to <br /> <span>SHAASTRA JUNIORS</span></h1>
                        <p>Registered? <a href="/signin"><span>Sign In</span></a></p>
                    </Box>
                    <form action="" onSubmit={async (e) => {
                        e.preventDefault();
                        if(pw === checkPw)
                        {
                            try{
                                const resp = await createUserMutation({variables: {
                                    createUserData: {
                                        name: name,
                                        email: email,
                                        password: pw,
                                        school: school,
                                        class: standard
                                    }
                            }})
                            console.log(resp)
                        }
                        catch(err) {console.log(err)}
                           history.push('/')
                       }
                    }}>
                        <Flex width="95%" margin="auto" justifyContent="space-between" height="70%" className="sign-input-up"> 
                            <Flex flexDirection="column" justifyContent="space-between" className="sign-input sign-input-up">
                                <label htmlFor="name">Name</label>
                                <label htmlFor="username">Email ID</label>
                                <label htmlFor="password">Password</label>
                                <label htmlFor="passwordR">Repeat password</label>
                                <label htmlFor="school">School</label>
                                <label htmlFor="class">Class</label>
                            </Flex>
                            <Flex flexDirection="column" justifyContent="space-between" className="sign-input sign-input-up">
                                <input type="text" name="name" onChange={nameHandler}/>
                                <input type="text" name="username" onChange={emailHandler}  />
                                <input type="password" name="password" onChange={pwHandler} /> 
                                <input type="password" name="passwordR" onChange={repeatPwHandler} />
                                <input type="text" name="school" onChange={schoolHandler} />
                                <select name="class" id="class" onSelect={classHandler}>
                                    <option value="SIXTH">Sixth</option>
                                    <option value="SEVENTH">Seventh</option>
                                    <option value="EIGTH">Eight</option>
                                    <option value="NINTH">Ninth</option>
                                    <option value="TENTH">Tenth</option>
                                    <option value="ELEVENTH">Eleventh</option>
                                    <option value="TWELTH">Twelfth</option>
                                </select>
                            </Flex>
                        </Flex>
                            <input type="submit" value="Sign Up" className="submit" />
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


                    <div className="sign-hidden">
                    <Flex width="90vw" margin="auto" height="60vh" boxShadow="0px 0px 15px 0px #1c1c2b80"
                alignItems="center" zIndex="2" flexDirection="column">
                    <Box width="90vw" padding="0 1.8vw"  height="50%" className="sign-intro" backgroundColor="#b0dbbe"
                    display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                        <h1>Welcome to <br /> <span>SHAASTRA JUNIORS</span></h1>
                        {/* <p>Registered? <a href="/signin"><span>Sign In</span></a></p> */}
                    </Box>
                    <form action="" onSubmit={async () => {
                        if(pw === checkPw)
                        {
                            try{
                                const resp = await createUserMutation({variables: {
                                    createUserData: {
                                        name: name,
                                        email: email,
                                        password: pw,
                                        school: school,
                                        class: standard
                                    }
                            }})
                            console.log(resp)
                        }
                        catch(err) {console.log(err)}
                           history.push('/')
                       }
                    }}>
                        <Flex width="75%" margin="auto" paddingTop="2vh" paddingBottom="2vh" justifyContent="space-between" height="70%" className="sign-input-up"> 
                            <Flex flexDirection="column" justifyContent="space-between" className="sign-input sign-input-up">
                                <label htmlFor="name">Name</label>
                                <label htmlFor="username">Email ID</label>
                                <label htmlFor="password">Password</label>
                                <label htmlFor="passwordR">Repeat password</label>
                                <label htmlFor="school">School</label>
                                <label htmlFor="class">Class</label>
                            </Flex>
                            <Flex flexDirection="column" justifyContent="space-between" alignItems="center" className="sign-input sign-input-up">
                                <input type="text" name="name" onChange={nameHandler}/>
                                <input type="text" name="username" onChange={emailHandler}  />
                                <input type="password" name="password" onChange={pwHandler} /> 
                                <input type="password" name="passwordR" onChange={repeatPwHandler} />
                                <input type="text" name="school" onChange={schoolHandler} />
                                <select name="class" id="class" onSelect={classHandler}>
                                    <option value="SIXTH">Sixth</option>
                                    <option value="SEVENTH">Seventh</option>
                                    <option value="EIGTH">Eight</option>
                                    <option value="NINTH">Ninth</option>
                                    <option value="TENTH">Tenth</option>
                                    <option value="ELEVENTH">Eleventh</option>
                                    <option value="TWELTH">Twelfth</option>
                                </select>
                            </Flex>
                        </Flex>
                            <Flex width="90%" margin="auto" alignItems="flex-end" justifyContent="space-between">
                            <input type="submit" value="Sign Up" className="submit" />
                            <p className="link-sign"> Registered? <a href="/signin"><span>Sign In</span></a></p>
                            </Flex>
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
                    </div>
            </Box>
        </CustomBox>
    )
}

export default SignUp