import * as React from 'react'
import { faInstagram, faLinkedin, faFacebook } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { Text, useColorModeValue, Flex, Stack, Image, Box } from "@chakra-ui/react";
import '../../styles/footer.css';

interface Props {
    
}

const Footer = (props: Props) => {
    return (
      <div className="footer">
        <h2 className="foot-heading">CONTACT US</h2>
        <div className="social-ctn">
           <a href="https://www.instagram.com/shaastra_iitm/?hl=en\" target="_blank" rel="noreferrer" ><FontAwesomeIcon size="4x" icon={faInstagram} className="social-icon" /></a>
           <a href="https://www.facebook.com/Shaastra/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebook} size="4x" className="social-icon" ></FontAwesomeIcon></a>
           <a href="https://in.linkedin.com/company/shaastra-iit-madras" target="_blank" rel="noreferrer"><FontAwesomeIcon size="4x" icon={faLinkedin} className="social-icon" ></FontAwesomeIcon></a>
        </div>
        <div className="footer-text">
            <p className="sec-text">Shaastra Junior 2021  ©  All Rights Reserved</p>
            <p className="sec-text">DESIGNED BY SHAASTRA WEBOPS 2022</p>
        </div>
    </div>
    )
}

export default Footer
