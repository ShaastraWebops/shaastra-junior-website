import React from 'react'
import CustomBox from "../../shared/Header";
import "../styles/contact.css"
import {Flex, Image, Box} from "@chakra-ui/react"
import contact from "../../../images/contact/contact.png"

const Contactus = () => {
    return (
        <CustomBox>
            hey
        <Box width="100vw" height="100vh" zIndex="1">
           
                <div className="contact">
            {/* <div className="custom-shape-divider-bottom-1629357574">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
            </svg>
            
            </div> */}
           <svg width="100vw" height="150vh" viewBox="0 0 1566 1448" fill="none" xmlns="http://www.w3.org/2000/svg" className="contact-img">
<path d="M-161.437 0.498097C-148.01 295.407 -528.329 531.766 -416.85 727.221C-244.372 1029.62 -599.839 1322.92 -626.779 1489.09C-668.29 1745.13 -152.084 1699.77 -175.924 2004.51C-211.39 2458.17 -603.013 2385.94 -360.333 3123.34L2983.1 1618.46C2726.14 1496.76 2869.8 1306.69 2612.87 1184.92C2355.94 1063.16 2176.1 1368.92 1919 1246.97C1661.89 1125.02 1879.4 848.731 1622.42 726.988C1365.43 605.246 1241.47 638.917 884.808 697.491C475.559 663.87 532.602 540.869 518.483 352.573C434.432 130.869 191.081 254.305 -161.437 0.498097Z" fill="lightblue" fill-opacity="1"/>
</svg>


            {/* <svg height="100%" width="100vw" id="svg"  xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150"><path d="M 0,700 C 0,700 0,350 0,350 C 62.33527997251804,325.3699759532807 124.67055994503608,300.7399519065613 195,300 C 265.3294400549639,299.2600480934387 343.6530401923738,322.41016832703536 414,370 C 484.3469598076262,417.58983167296464 546.717279285469,489.6193747852972 620,468 C 693.282720714531,446.3806252147028 777.4778426657506,331.1123325317761 843,317 C 908.5221573342494,302.8876674682239 955.3713500515289,389.93129508759876 1025,390 C 1094.628649948471,390.06870491240124 1187.0367571281345,303.16248711782896 1260,282 C 1332.9632428718655,260.83751288217104 1386.4816214359328,305.4187564410855 1440,350 C 1440,350 1440,700 1440,700 Z" stroke="none" stroke-width="0" fill="#ff0080ff" className="transition-all duration-300 ease-in-out delay-150"></path></svg> */}
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,64L20,69.3C40,75,80,85,120,80C160,75,200,53,240,53.3C280,53,320,75,360,101.3C400,128,440,160,480,144C520,128,560,64,600,80C640,96,680,192,720,192C760,192,800,96,840,58.7C880,21,920,43,960,74.7C1000,107,1040,149,1080,149.3C1120,149,1160,107,1200,80C1240,53,1280,43,1320,42.7C1360,43,1400,53,1420,58.7L1440,64L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z"></path></svg> */}
            {/* <div className="contact-bg"></div> */}
            <Flex width="90vw" height="100vh" margin="auto" justifyContent="flex-end" alignItems="center" position="relative"
             className="main-contact-div"
            flexDirection="column" padding="0 3vw">
            {/* <Flex justifyContent="space-between" width="100%" height="30%" alignItems="center">
                <h1>CONTACT US</h1>
                <Image src={contact} width="40%" height="auto"></Image>
            </Flex> */}
            <h1>CONTACT US</h1>
            <Image src={contact} width="50%" height="auto" position="absolute" right="0%"></Image>
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
