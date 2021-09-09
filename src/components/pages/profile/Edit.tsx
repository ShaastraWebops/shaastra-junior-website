import React from 'react'
import CustomBox from '../../shared/CustomBox'
import {Box, Flex,Image} from "@chakra-ui/react"
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Standard } from '../../../types/generated/generated'
import "../../../styles/signin.css"
import "../../../styles/profile.css"
import {name,school,standard} from "../signinUp/Cookie"
import { useEditProfileMutation } from '../../../types/generated/generated'
import { useHistory } from 'react-router-dom'
import {Modal, ModalOverlay, ModalBody, ModalCloseButton, ModalHeader, ModalContent, useDisclosure} from "@chakra-ui/react"

const Edit = () => {
    const history = useHistory()
    const [Name, setName] = useState(name())
    const {Sixth, Seventh, Eigth, Ninth, Tenth, Eleventh, Twelfth} = Standard
    const [School, setSchool] = useState(school())
    const [editProfileMutation, { data, loading, error }] = useEditProfileMutation()
    const [Error, setError] = useState(false)
    const {isOpen, onOpen} = useDisclosure()

    const nameHandler = (e:any) => {
        setName(e.target.value)
    }

    const schoolHandler =(e:any) => {setSchool(e.target.value)}
    const onClose = () => {history.push('/profile')}

    return(
        <CustomBox>
            <Box width="100vw" height="fit-content" backgroundColor="#AACDBE" paddingBottom="5vh">
                <div className="profile">
                  <h1>EDIT PROFILE</h1>
                  <div className="profile-div">
                    <Flex width="100%" height="fit-content" paddingTop="5vh"  justifyContent="space-evenly" alignItems="center">
                            <Flex flexDirection="column" className="profile-info" padding="8vh 0" width="50%"
                            justifyContent="center" alignItems="flex-end" textAlign="right" color="#919ca3">
                                <form onSubmit={() => {
                                    try {
                                        const resp = editProfileMutation({
                                            variables: {
                                                data: {
                                                    name: Name,
                                                    school: School
                                                }
                                            }
                                        })
                                    }
                                    catch(e){
                                        setError(true)
                                    }
                                    if(data?.editProfile) history.push('/') 
                                    if(!data?.editProfile)
                                    {
                                        setError(true)
                                    }
                                }}>
                                    <Flex width="95%" margin="0 auto" justifyContent="space-between" height="70%"> 
                            <Flex flexDirection="column" justifyContent="center" alignItems="center"  height="15vh" className="edit">
                                <label htmlFor="name">Name</label>
                                <label htmlFor="school">School</label>
                            </Flex>
                            <Flex flexDirection="column" justifyContent="center"  height="15vh" className="edit">
                                <input type="text" name="name" onChange={nameHandler} placeholder={localStorage.getItem('name')!} />
                                <input type="text" name="school" onChange={schoolHandler} placeholder={localStorage.getItem('school')!} />
                            </Flex>
                        </Flex>
                        <a href="/forgot">Reset Password</a>
                                    {/* <input type="text" name="name" placeholder={name()} onChange={nameHandler} />
                                    <input type="text" placeholder={school()} onChange={schoolHandler} />
                                    <select name="standard" id="" placeholder={standard()}>
                                        <option value="SIXTH">Sixth</option>
                                        <option value="SEVENTH">Seventh</option>
                                        <option value="EIGTH">Eight</option>
                                        <option value="NINTH">Ninth</option>
                                        <option value="TENTH">Tenth</option>
                                        <option value="ELEVENTH">Eleventh</option>
                                        <option value="TWELTH">Twelfth</option>
                                    </select> */}
                                    <input type="submit" value="Done" className="submit" />
                                </form>
                            </Flex>
                        </Flex>
                  </div>
                </div>
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
            </Box>
        </CustomBox>
    )
}

export default Edit