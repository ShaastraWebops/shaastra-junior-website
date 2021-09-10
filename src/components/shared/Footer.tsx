import * as React from 'react'
import { faInstagram, faLinkedin, faFacebook } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Text, useColorModeValue, Flex, Stack, Image, Box } from "@chakra-ui/react";

interface Props {
    
}

const Footer = (props: Props) => {
    return (

        <Box color="#000" width="100%" height="30vh" paddingTop="6vh">
        <Flex height="30%" width="25%" margin="auto" justifyContent="space-between" alignItems="flex-end">
          <a href="https://www.instagram.com/shaastra_iitm/?hl=en\" target="_blank"><FontAwesomeIcon size="4x" icon={faInstagram} color="#000" /></a>
          <a href="https://www.facebook.com/Shaastra/" target="_blank"><FontAwesomeIcon icon={faFacebook} size="4x" color="#000"></FontAwesomeIcon></a>
          <a href="https://in.linkedin.com/company/shaastra-iit-madras" target="_blank"><FontAwesomeIcon size="4x" icon={faLinkedin} color="#000"></FontAwesomeIcon></a>
        </Flex>
        <Box height="10%"></Box>
        <Flex justifyContent="center">
          <Text fontSize="15px" fontWeight="500">Designed By Kritika,Mitesh,Srinivas,Tushar,Jenith</Text></Flex>
        <Flex justifyContent="center">
          <Text fontSize="15px" fontWeight="500">Webops Team Shaastra</Text></Flex>
        <Flex justifyContent="center">
          <Text fontSize="15px" fontWeight="500">Copyright &copy; 2020 Shaastra</Text></Flex>
      </Box>
    )
}

export default Footer
