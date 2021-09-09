import React from 'react'
import {
    Text,
    VStack,
    Code,
    useColorModeValue,
    Flex,
    Spacer,
    Button,
    AspectRatio,
    Stack,
    Link,
    Image,
    Avatar,
    Heading,
    Center,
    Box,
} from "@chakra-ui/react";
import instagram from '../../../images/instagram-logo.png';
import facebook from '../../../images/facebook.png';
import linkedln from '../../../images/linkedin.png';

const Footer = () => {
    return (
        <Box width="100%" height="35vh">
            <Flex justifyContent="center">
                <Text fontSize="20px" fontWeight="650">&nbsp;CONTACT US</Text>
            </Flex>
            <br/>
            <Flex justifyContent="center" width="100%">
            <Flex justifyContent="space-between" width="20vw">
                <img src={instagram} width="40px" alt=""/>
                <img src={linkedln} width="40px" alt=""/>
                <img src={facebook} width="40px" alt=""/>
            </Flex>
            </Flex>
            <br/>
            <Flex justifyContent="center">
                <Text>&copy;&nbsp;shaastra Junior 2022 . All Rights Reserved</Text>
            </Flex>
            <Flex justifyContent="center">
                <Text paddingBottom="20px" fontSize="12px">DESIGNED BY - JANITH, MITESH, KRITHIKA, SHRINIVAS, TUSHAR, WEBOPS TEAM-SHAASTRA </Text>
                <br/>
            </Flex>
        </Box>
    )
}

export default Footer