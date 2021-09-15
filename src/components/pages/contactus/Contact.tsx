import React from 'react'
import CustomBox from "../../shared/CustomBox";
import "../../../styles/contact.css"
import { Flex, Image, Box } from "@chakra-ui/react"
import contact from "../../../images/contact/contact.png"

const Contactus = () => {
    return (
        <CustomBox>
            <Box width="100vw" height="calc(100vh - 94px)" zIndex="1" backgroundColor="#AACDBE">

                <div className="contact">
                    {/* <svg width="100vw" height="calc(100vh - 94px)" viewBox="0 0 1566 1448" fill="none" xmlns="http://www.w3.org/2000/svg" className="contact-img">
                        <path d="M-161.437 0.498097C-148.01 295.407 -528.329 531.766 -416.85 727.221C-244.372 1029.62 -599.839 1322.92 -626.779 1489.09C-668.29 1745.13 -152.084 1699.77 -175.924 2004.51C-211.39 2458.17 -603.013 2385.94 -360.333 3123.34L2983.1 1618.46C2726.14 1496.76 2869.8 1306.69 2612.87 1184.92C2355.94 1063.16 2176.1 1368.92 1919 1246.97C1661.89 1125.02 1879.4 848.731 1622.42 726.988C1365.43 605.246 1241.47 638.917 884.808 697.491C475.559 663.87 532.602 540.869 518.483 352.573C434.432 130.869 191.081 254.305 -161.437 0.498097Z" fill="#eff1d0c7" fill-opacity="0.8" />
                    </svg> */}
                    <Flex width="95vw" margin="auto" justifyContent="flex-end" alignItems="center" position="relative"
                        className="main-contact-div" flexDirection="column" padding="0 3vw" marginBottom="0">
                        <Box position="absolute" right="5%" width="40%" textAlign="center" className="contact-side-img">
                            <Image src={contact} width="100%" height="auto" ></Image>
                            <a href='https://www.freepik.com/vectors/business' target="_blank">Created by pikisuperstar - www.freepik.com</a>
                        </Box>
                        <Box alignSelf="flex-start" marginTop="7vh" justifySelf="flex-end" width="30vw" height="fit-content" className="contact-main">
                            <h1 style={{ fontSize: "4em" }}>CONTACT US</h1>
                            <Box marginBottom="0" fontSize="1.5vw" marginTop="1vh" className="lang">English</Box>
                            <Flex className="contact-div" height="18%" borderBottom="2px dotted #2b3336" alignSelf="flex-start" justifyContent="space-between" >
                                <Flex className="contact-info" fontSize="1.5vw" margin="0" justifyContent="center" padding="2vw" paddingLeft="0" flexDirection="column">
                                    <b>Siddhivinayak</b>
                                    <a href={"http://wa.me/+919672025542"} target="_blank"><p>96720 25542</p></a>
                                </Flex>
                                <Flex className="contact-info" fontSize="1.5vw" margin="0" justifyContent="center" padding="2vw" flexDirection="column">
                                    <b>Vyshnavi </b>
                                    <a href={"http://wa.me/+918897091122"} target="_blank"><p>88970 91122</p></a>
                                </Flex>
                            </Flex>
                            <Flex width="100%" justifyContent="space-between" borderBottom="2px dotted #2b3336" height="fit-content">
                                <Flex flexDirection="column" justifyContent="center" height="10%">
                                    <Box fontSize="1.5vw" marginTop="3vh" className="lang">Hindi</Box>
                                    <Flex className="contact-div" alignSelf="flex-start" justifyContent="space-between" >
                                        <Flex className="contact-info" fontSize="1.5vw" margin="3vh 0" justifyContent="center" padding="2vw" paddingBottom="0vw" paddingTop="0" paddingLeft="0" flexDirection="column">
                                            <b>Aditya</b>
                                            <a href={"http://wa.me/+918178180545"} target="_blank"><p>81781 80545</p></a>
                                        </Flex>
                                    </Flex>
                                </Flex>
                                <Flex flexDirection="column" height="10%">
                                    <Box fontSize="1.5vw" marginTop="3vh" className="lang">Tamil</Box>
                                    <Flex className="contact-div" alignSelf="flex-start" justifyContent="space-between" >
                                        <Flex className="contact-info" fontSize="1.5vw" margin="3vh 0" justifyContent="center" padding="2vw" paddingBottom="0vw" paddingTop="0" paddingLeft="0" flexDirection="column">
                                            <b>Mohan</b>
                                            <a href={"http://wa.me/+919952729095"} target="_blank"><p>99527 29095</p></a>
                                        </Flex>
                                    </Flex>
                                </Flex>
                            </Flex>
                            <Flex width="100%" justifyContent="space-between" height="fit-content">
                                <Flex flexDirection="column" justifyContent="center" height="10%">
                                    <Box fontSize="1.5vw" marginTop="3vh" className="lang">Telugu</Box>
                                    <Flex className="contact-div" height="fit-content" alignSelf="flex-start" justifyContent="space-between" >
                                        <Flex className="contact-info" fontSize="1.5vw" margin="3vh 0" marginBottom="0" padding="2vw" paddingBottom="0vw" paddingTop="0" paddingLeft="0" flexDirection="column">
                                            <b>Anogna</b>
                                            <a href={"http://wa.me/+916305984724"} target="_blank"><p>63059 84724</p></a>
                                        </Flex>
                                    </Flex>
                                </Flex>
                                <Flex flexDirection="column" justifyContent="center" height="10%">
                                    <Box fontSize="1.5vw" marginTop="3vh" className="lang">Malayalam</Box>
                                    <Flex className="contact-div" height="fit-content" alignSelf="flex-start" justifyContent="space-between" >
                                        <Flex className="contact-info" fontSize="1.5vw" margin="3vh 0" marginBottom="0" padding="2vw" paddingBottom="0" paddingTop="0" paddingLeft="0" flexDirection="column">
                                            <b>Anshid</b>
                                            <a href={"http://wa.me/+919672025542"} target="_blank"><p>75929 76901</p></a>
                                        </Flex>
                                    </Flex>
                                </Flex>
                            </Flex>
                        </Box>
                    </Flex>
                </div>
            </Box>
        </CustomBox>
    )
}

export default Contactus
