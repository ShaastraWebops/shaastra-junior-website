import * as React from "react";
import { Flex, Heading } from "@chakra-ui/layout";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/modal";
import { useDisclosure } from "@chakra-ui/hooks";
import { useBreakpointValue } from "@chakra-ui/media-query";
import {Box} from "@chakra-ui/react"
import {faInstagram, faLinkedin, faFacebook} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../../styles/header.css"
import { Link } from "react-router-dom";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const CustomDrawer = (props: Props) => {
  const closeButtonSize = useBreakpointValue({ base: "xs", lg: "md" });
  const { isOpen } = useDisclosure({ isOpen: props.isOpen });

  return (
    <Drawer
      placement="right"
      onClose={props.onClose}
      isOpen={isOpen}
      size="xs"
      
    >
      <DrawerOverlay  />
      <DrawerContent backgroundColor="#222244dc" >
        <DrawerHeader
          as={Flex}
          justifyContent="space-between"
          alignItems="center"
          flexDirection="row"
        >
          {/* <Heading fontWeight="normal" width="100%" textAlign="center" p={3}>Our Menu</Heading> */}
          <DrawerCloseButton
            variant="unstyled"
            mt={3}
            mr={3}
            p={2}
            outline="none"
            borderRadius="50%"
            color ={'white'}
            size={closeButtonSize}
          />
        </DrawerHeader>
        <DrawerBody overflow="hidden">
        <Flex flexDirection="column" height="100%" justifyContent="space-between" className="menu-links"
        fontSize="2vw" p={3} width="center" alignItems="center" color={'white'}>
          <Flex flexDirection="column" height="80%" width="100%" justifyContent="space-around" alignItems="center">
            <Link to="/profile">My Profile</Link>
            <Link to="/helpdesk">Help Desk</Link>
            <Link to="/contactus">Contact Us</Link>
            <Link to="/">Sign Out</Link>
          </Flex>
          <Flex height="50%"  width="80%" margin="auto" justifyContent="space-between" alignItems="flex-end">
            <a href="https://www.instagram.com/shaastra_iitm/?hl=en\" target="_blank"><FontAwesomeIcon icon={faInstagram}  color="white" /></a>
            <a href="https://www.facebook.com/Shaastra/" target="_blank"><FontAwesomeIcon icon={faFacebook}  color="white"></FontAwesomeIcon></a>
            <a href="https://in.linkedin.com/company/shaastra-iit-madras" target="_blank"><FontAwesomeIcon icon={faLinkedin}  color="white"></FontAwesomeIcon></a>
          </Flex>
          <Box alignSelf="center" justifySelf="flex-end" className="credit"
          fontSize="1vw" textAlign="center" padding="2vw 0 0 0">Designed by Krithikaa,Mitesh,Srinivas,Tushar <br /> Webops Team Shaastra <br /> <b>Copyright © 2022 Shaastra</b> </Box>
        </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default CustomDrawer;
