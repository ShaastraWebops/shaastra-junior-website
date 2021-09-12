import React from 'react'
import CustomBox from "../../shared/CustomBox";
import "../../../styles/signin.css"
import Particles from 'react-tsparticles';
import particlesConfig from "./particles.json"

import { Flex, Image, Box, Text } from "@chakra-ui/react"
import { useCreateUserMutation, useGetProfileQuery } from '../../../types/generated/generated';
import { useState } from 'react';
import { Standard } from '../../../types/generated/generated';
import { useHistory, Redirect } from 'react-router-dom';
import sj_logo from "../../../images/home/sj_logo_color_tr.png";
import { cities } from './cities';
import {Modal, ModalOverlay, ModalBody, ModalCloseButton, ModalContent, ModalHeader, useDisclosure} from "@chakra-ui/react"


const SignUp = () => {

    var {isOpen, onOpen, onClose} = useDisclosure();

    const { Sixth, Seventh, Eigth, Ninth, Tenth, Eleventh, Twelfth } = Standard
    const [createUserMutation, { data, loading, error }] = useCreateUserMutation();
    const [email, setEmail] = useState("")
    const [pw, setPw] = useState("")
    const [checkPw, setCheckPw] = useState("")
    const [name, setName] = useState("")
    const [school, setSchool] = useState("")
    const [state, setState] = useState("Andaman and Nicobar Islands")
    const [city, setCity] = useState("")
    const [standard, setStandard] = useState<Standard>(Sixth)
    const history = useHistory()
    const [logged, setLogged] = useState(false)

    const emailHandler = (e: any) => { setEmail(e.target.value) }
    const pwHandler = (e: any) => { setPw(e.target.value) }
    const repeatPwHandler = (e: any) => { setCheckPw(e.target.value) }
    const nameHandler = (e: any) => { setName(e.target.value) }
    const schoolHandler = (e: any) => { setSchool(e.target.value) }
    const stateHandler = (e: any) => { setState(e.target.value) }
    const cityHandler = (e: any) => { setCity(e.target.value) }
    const classHandler = (e: any) => {
        switch (e.target.value) {
            case 'SIXTH': setStandard(Sixth); break;
            case 'SEVENTH': setStandard(Seventh); break;
            case 'EIGTH': setStandard(Eigth); break;
            case 'NINTH': setStandard(Ninth); break;
            case 'TENTH': setStandard(Tenth); break;
            case 'ELEVENTH': setStandard(Eleventh); break;
            default: setStandard(Twelfth);

        }
    }
    // let states: any = '';
    // for (states in cities) {
    //     // cities[states];
    //     console.log(cities[states]);
    // }
    onClose =  () => {
        history.push('/')
    }
    return (
        <CustomBox>
            <Box width="100vw" height="100vh" className="sign" backgroundColor="#AACDBE" display="flex" alignItems="center">
                {/* <Particles id="particles-js" params={particlesConfig}></Particles> */}
                <Flex width="fit-content" margin="auto" height="60vh" boxShadow="0px 0px 15px 0px #1c1c2b80"
                    alignItems="center" zIndex="2" className="sign-flex sign-flex-up sign-h">
                    <Box width="40vw" padding="0 1.8vw" height="100%" className="sign-intro" backgroundColor="#b0dbbe"
                        display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                        <Image src={sj_logo} width={"50%"} />
                        <p>Registered? <a href="/signin"><span>Sign In</span></a></p>
                    </Box>
                    <form action="" onSubmit={async (e) => {
                        console.log("clciked")
                        e.preventDefault();
                        if (pw === checkPw) {
                            try {
                                const resp = await createUserMutation({
                                    variables: {
                                        createUserData: {
                                            name: name,
                                            email: email,
                                            password: pw,
                                            school: school,
                                            class: standard,
                                            state: state,
                                            city: city
                                        }
                                    }
                                });
                                setLogged(true)
                            }
                            catch (err) { console.log(err) }
                        }
                    }}>
                        {/* <Flex width="fit-content" margin="auto" paddingTop="2vh" paddingBottom="2vh" justifyContent="space-between" height="70%" className="sign-input-up"> */}
                                <Flex flexDirection="column" width="100%" justifyContent="space-between" className="sign-input sign-input-up">
                                   <div>
                                   <label htmlFor="name">Name</label>
                                    <input required style={{ padding: "15px" }} placeholder="Enter full name" type="text" name="name" onChange={nameHandler} />
                                   </div>
                                   <div>
                                   <label htmlFor="username">Email ID</label>
                                    <input required style={{ padding: "15px" }} placeholder="Enter your email" type="email" name="username" onChange={emailHandler} />
                                   </div>
                                    <div>
                                    <label htmlFor="password">Password</label>
                                    <input required style={{ padding: "15px" }} placeholder="Enter password" type="password" name="password" onChange={pwHandler} />
                                    </div>
                                    <div><label htmlFor="passwordR">Repeat password</label>
                                    <input required style={{ padding: "15px" }} type="password" name="passwordR" placeholder="Re-enter your password" onChange={repeatPwHandler} />
                                    </div>
                                    <div>
                                    <label htmlFor="school">School</label>
                                    <input required style={{ padding: "15px" }} type="text" name="school" placeholder="Enter full school name" onChange={schoolHandler} />
                                    </div>
                                    <div>
                                    <label htmlFor="class">Class</label>
                                    <select required name="class" id="class" onChange={classHandler} placeholder="Select Class">
                                        <option value="SIXTH">Sixth</option>
                                        <option value="SEVENTH">Seventh</option>
                                        <option value="EIGTH">Eight</option>
                                        <option value="NINTH">Ninth</option>
                                        <option value="TENTH">Tenth</option>
                                        <option value="ELEVENTH">Eleventh</option>
                                        <option value="TWELTH">Twelfth</option>
                                    </select>
                                    </div>
                                    <div>
                                    <label htmlFor="state">State</label>
                                    <select required name="state" id="state" onChange={stateHandler} placeholder="Select State">
                                        {Object.keys(cities).map((_state: any) => {
                                            return (
                                                <option key={_state} value={_state}>{_state}</option>
                                            );
                                        })}
                                    </select>
                                    </div>
                                    <div>
                                    <label htmlFor="city">City</label>
                                    <select required name="city" id="city" onChange={cityHandler} placeholder="Select City">
                                        {cities[state].map((_city: any) => {
                                            return (
                                                <option key={_city} value={_city}>{_city}</option>
                                            );
                                        })}
                                    </select>
                                    </div>
                                </Flex>
                        {/* </Flex> */}
                        {/* <Text alignSelf={"center"} paddingTop={"15px"} fontSize={"5px"}>All field are required</Text> */}
                        {/* <Text alignSelf={"center"} paddingTop={"15px"}>Enter full school name</Text> */}
                        <input required type="submit" value="Sign Up" className="submit" />
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
                    <Flex width="90vw" margin="auto" height="60vh" boxShadow="0px 0px 15px 0px #1c1c2b80" className="sign-flex sign-flex-up"
                        alignItems="center" zIndex="2" flexDirection="column">
                        <Box width="90vw" padding="0 1.8vw" height="50%" className="sign-intro" backgroundColor="#b0dbbe"
                            display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                            <Image src={sj_logo} width={"50%"} />
                            {/* <p>Registered? <a href="/signin"><span>Sign In</span></a></p> */}
                        </Box>
                        <form action="" onSubmit={async () => {
                            if (pw === checkPw) {
                                try {
                                    const resp = await createUserMutation({
                                        variables: {
                                            createUserData: {
                                                name: name,
                                                email: email,
                                                password: pw,
                                                school: school,
                                                class: standard,
                                                state: state,
                                                city: city
                                            }
                                        }
                                    })
                                    console.log(resp)
                                }
                                catch (err) { console.log(err) }
                                history.push('/')
                            }
                        }}>
                            {/* <Flex width="fit-content" margin="auto" paddingTop="2vh" paddingBottom="2vh" justifyContent="space-between" height="70%" className="sign-input-up"> */}
                                <Flex flexDirection="column" justifyContent="space-between" className="sign-input sign-input-up">
                                   <div>
                                   <label htmlFor="name">Name</label>
                                    <input required style={{ padding: "15px" }} placeholder="Enter full name" type="text" name="name" onChange={nameHandler} />
                                   </div>
                                   <div>
                                   <label htmlFor="username">Email ID</label>
                                    <input required style={{ padding: "15px" }} placeholder="Enter your email" type="email" name="username" onChange={emailHandler} />
                                   </div>
                                    <div>
                                    <label htmlFor="password">Password</label>
                                    <input required style={{ padding: "15px" }} placeholder="Enter password" type="password" name="password" onChange={pwHandler} />
                                    </div>
                                    <div><label htmlFor="passwordR">Repeat password</label>
                                    <input required style={{ padding: "15px" }} type="password" name="passwordR" placeholder="Re-enter your password" onChange={repeatPwHandler} />
                                    </div>
                                    <div>
                                    <label htmlFor="school">School</label>
                                    <input required style={{ padding: "15px" }} type="text" name="school" placeholder="Enter full school name" onChange={schoolHandler} />
                                    </div>
                                    <div>
                                    <label htmlFor="class">Class</label>
                                    <select required name="class" id="class" onChange={classHandler} placeholder="Select Class">
                                        <option value="SIXTH">Sixth</option>
                                        <option value="SEVENTH">Seventh</option>
                                        <option value="EIGTH">Eight</option>
                                        <option value="NINTH">Ninth</option>
                                        <option value="TENTH">Tenth</option>
                                        <option value="ELEVENTH">Eleventh</option>
                                        <option value="TWELTH">Twelfth</option>
                                    </select>
                                    </div>
                                    <div>
                                    <label htmlFor="state">State</label>
                                    <select required name="state" id="state" onChange={stateHandler} placeholder="Select State">
                                        {Object.keys(cities).map((_state: any) => {
                                            return (
                                                <option key={_state} value={_state}>{_state}</option>
                                            );
                                        })}
                                    </select>
                                    </div>
                                    <div>
                                    <label htmlFor="city">City</label>
                                    <select required name="city" id="city" onChange={cityHandler} placeholder="Select City">
                                        {cities[state].map((_city: any) => {
                                            return (
                                                <option key={_city} value={_city}>{_city}</option>
                                            );
                                        })}
                                    </select>
                                    </div>
                                </Flex>
                                {/* <Flex flexDirection="column" justifyContent="space-between" alignItems="center" className="sign-input sign-input-up">
                                    <input required style={{ padding: "15px" }} placeholder="Enter full name" type="text" name="name" onChange={nameHandler} />
                                    <input required style={{ padding: "15px" }} placeholder="Enter your email" type="email" name="username" onChange={emailHandler} />
                                    <input required style={{ padding: "15px" }} placeholder="Enter password" type="password" name="password" onChange={pwHandler} />
                                    <input required style={{ padding: "15px" }} type="password" name="passwordR" placeholder="Re-enter your password" onChange={repeatPwHandler} />
                                    <input required style={{ padding: "15px" }} type="text" name="school" placeholder="Enter full school name" onChange={schoolHandler} />
                                    <select required name="class" id="class" onChange={classHandler} placeholder="Select Class">
                                        <option value="SIXTH">Sixth</option>
                                        <option value="SEVENTH">Seventh</option>
                                        <option value="EIGTH">Eight</option>
                                        <option value="NINTH">Ninth</option>
                                        <option value="TENTH">Tenth</option>
                                        <option value="ELEVENTH">Eleventh</option>
                                        <option value="TWELTH">Twelfth</option>
                                    </select>
                                    <select required name="state" id="state" onChange={stateHandler} placeholder="Select State">
                                        {Object.keys(cities).map((_state: any) => {
                                            return (
                                                <option key={_state} value={_state}>{_state}</option>
                                            );
                                        })}
                                    </select>
                                    <select required name="city" id="city" onChange={cityHandler} placeholder="Select City">
                                        {cities[state].map((_city: any) => {
                                            return (
                                                <option key={_city} value={_city}>{_city}</option>
                                            );
                                        })}
                                    </select>
                                </Flex> */}
                            {/* </Flex> */}
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
                {
                    logged === true ?
                    <Modal isOpen={true} onClose={onClose}>
                                        <ModalOverlay></ModalOverlay>
                                        <ModalContent backgroundColor="#AACDBE" color="#222244" border="none">
                                            <ModalBody paddingTop="4vh" borderBottom="2px solid #1c1c2bc2" margin="0 1vw" textAlign="center">
                                            <h2>Registered Successfully. Check your email to verify your registration.</h2>
                                            </ModalBody>
                                            <ModalCloseButton></ModalCloseButton>
                                        </ModalContent>
                                    </Modal>
                    : null
                }
            </Box>
        </CustomBox>
    )
}

export default SignUp