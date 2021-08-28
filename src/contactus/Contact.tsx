import React from 'react'
import CustomBox from "../../src/components/shared/CustomBox";
import "../styles/contact.css"
import {Flex, Image, Box} from "@chakra-ui/react"
import contact from "../images/contact/contact.png"

const Contactus = () => {
    return (
        <CustomBox>
        <Box idth="100vw" height="100vh" zIndex="1" backgroundColor="#222244d2">
           
                <div className="contact">
           <svg width="100vw" height="150vh" viewBox="0 0 1566 1448" fill="none" xmlns="http://www.w3.org/2000/svg" className="contact-img">
<path d="M-161.437 0.498097C-148.01 295.407 -528.329 531.766 -416.85 727.221C-244.372 1029.62 -599.839 1322.92 -626.779 1489.09C-668.29 1745.13 -152.084 1699.77 -175.924 2004.51C-211.39 2458.17 -603.013 2385.94 -360.333 3123.34L2983.1 1618.46C2726.14 1496.76 2869.8 1306.69 2612.87 1184.92C2355.94 1063.16 2176.1 1368.92 1919 1246.97C1661.89 1125.02 1879.4 848.731 1622.42 726.988C1365.43 605.246 1241.47 638.917 884.808 697.491C475.559 663.87 532.602 540.869 518.483 352.573C434.432 130.869 191.081 254.305 -161.437 0.498097Z" fill="#b1d4e2" fill-opacity="0.8"/>
</svg>
            <Flex width="90vw" height="100vh" margin="auto" justifyContent="flex-end" alignItems="center" position="relative"
             className="main-contact-div" flexDirection="column" padding="0 3vw">
            <h1>CONTACT 
                <span>US</span>
            </h1>
            <Box position="absolute" right="5%" width="45%"  textAlign="center" className="contact-side-img">
                <Image src={contact} width="100%" height="auto" ></Image>
                <a href='https://www.freepik.com/vectors/business' target="_blank">Created by pikisuperstar - www.freepik.com</a>
            </Box>
            <Flex className="contact-div" height="fit-content" width="20vw" alignSelf="flex-start" justifyContent="space-between">
                <Flex className="contact-info" fontSize="1.8vw" margin="3vh 0" padding="2vw" paddingLeft="0" flexDirection="column">
                    <p>Name</p>
                    <p>123456789</p>
                </Flex>
                <Flex className="contact-info" fontSize="1.8vw" margin="3vh 0" padding="2vw" flexDirection="column">
                    <p>Name</p>
                    <p>123456789</p>
                </Flex>
            </Flex>
            </Flex>
        </div>
        </Box>
        </CustomBox>
    )
}

export default Contactus
