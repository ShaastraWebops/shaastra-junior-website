import * as React from 'react'
import { faInstagram, faLinkedin, faFacebook } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { Text, useColorModeValue, Flex, Stack, Image, Box } from "@chakra-ui/react";
import '../../styles/footer.css';

interface Props {
    
}

const Footer = (props: Props) => {
    return (

      //   <Box color="#000" width="100%" height="30vh" paddingTop="6vh">
      //   <Flex height="30%" width="25%" margin="auto" justifyContent="space-between" alignItems="flex-end">
      //     <a href="https://www.instagram.com/shaastra_iitm/?hl=en\" target="_blank"><FontAwesomeIcon size="4x" icon={faInstagram} color="#000" /></a>
      //     <a href="https://www.facebook.com/Shaastra/" target="_blank"><FontAwesomeIcon icon={faFacebook} size="4x" color="#000"></FontAwesomeIcon></a>
      //     <a href="https://in.linkedin.com/company/shaastra-iit-madras" target="_blank"><FontAwesomeIcon size="4x" icon={faLinkedin} color="#000"></FontAwesomeIcon></a>
      //   </Flex>
      //   <Box height="10%"></Box>
      //   <Flex justifyContent="center">
      //     <Text fontSize="15px" fontWeight="500">Designed By Kritika,Mitesh,Srinivas,Tushar,Jenith</Text></Flex>
      //   <Flex justifyContent="center">
      //     <Text fontSize="15px" fontWeight="500">Webops Team Shaastra</Text></Flex>
      //   <Flex justifyContent="center">
      //     <Text fontSize="15px" fontWeight="500">Copyright &copy; 2020 Shaastra</Text></Flex>
      // </Box>
      <div className="footer">
        <h2 className="foot-heading">CONTACT US</h2>
        <div className="social-ctn">
           <a href="https://www.instagram.com/shaastra_iitm/?hl=en\" target="_blank" ><FontAwesomeIcon size="4x" icon={faInstagram} className="social-icon" /></a>
           <a href="https://www.facebook.com/Shaastra/" target="_blank"><FontAwesomeIcon icon={faFacebook} size="4x" className="social-icon" ></FontAwesomeIcon></a>
           <a href="https://in.linkedin.com/company/shaastra-iit-madras" target="_blank"><FontAwesomeIcon size="4x" icon={faLinkedin} className="social-icon" ></FontAwesomeIcon></a>
        </div>
        <div className="footer-text">
            <p className="sec-text">© shaastra Junior 2022. All Rights Reserved</p>
            <p className="sec-text">DESIGNED BY - WEBOPS TEAM - SHAASTRA</p>
        </div>
    </div>
    )
}

export default Footer
