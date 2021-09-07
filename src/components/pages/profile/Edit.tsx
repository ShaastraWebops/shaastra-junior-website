import React from 'react'
import CustomBox from '../../shared/CustomBox'
import {Box, Flex,Image} from "@chakra-ui/react"
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Standard, useGetProfileQuery } from '../../../types/generated/generated'
import "../../../styles/signin.css"
import "../../../styles/profile.css"

const Edit = () => {
    const {data,error,loading} = useGetProfileQuery()
    const [name, setName] = useState("")
    const {Sixth, Seventh, Eigth, Ninth, Tenth, Eleventh, Twelfth} = Standard
    const [school, setSchool] = useState("")
    const [standard, setStandard] = useState<Standard>()

    const nameHandler = (e:any) => {
        setName(e.target.value)
    }

    const schoolHandler =(e:any) => {setSchool(e.target.value)}

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
            <Box width="100vw" height="fit-content" backgroundColor="#AACDBE" paddingBottom="5vh">
                <div className="profile">
                  <h1>EDIT PROFILE</h1>
                  <div className="profile-div">
                    <Flex width="100%" height="fit-content" paddingTop="5vh"  justifyContent="space-evenly" alignItems="center">
                            <Flex flexDirection="column" className="profile-info" padding="8vh 0" width="50%"
                            justifyContent="center" alignItems="flex-end" textAlign="right" color="#919ca3">
                                <form >
                                    <input type="text" name="name" placeholder="yelo" onChange={nameHandler} />
                                    <input type="text" placeholder={`${data?.me?.school}`} onChange={schoolHandler} />
                                    <select name="standard" id="" placeholder={`${data?.me?.class}`} onChange={classHandler}>
                                        <option value="SIXTH">Sixth</option>
                                        <option value="SEVENTH">Seventh</option>
                                        <option value="EIGTH">Eight</option>
                                        <option value="NINTH">Ninth</option>
                                        <option value="TENTH">Tenth</option>
                                        <option value="ELEVENTH">Eleventh</option>
                                        <option value="TWELTH">Twelfth</option>
                                    </select>
                                    <input type="submit" value="Done" className="submit" />
                                </form>
                            </Flex>
                        </Flex>
                  </div>
                </div>
            </Box>
        </CustomBox>
    )
}

export default Edit