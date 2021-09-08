import * as React from "react";
import { Flex } from "@chakra-ui/layout";
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
import {Box, Button} from "@chakra-ui/react"
import {faInstagram, faLinkedin, faFacebook} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../../styles/header.css"
import { Link } from "react-router-dom";
import { useGetProfileQuery, useLoginMutation, useLogoutMutation } from "../../types/generated/generated";
import {useHistory} from "react-router"
import { useContext } from "react";
import { RoleContext } from "../pages/signinUp/Context";
import LogOut from "../pages/signinUp/LogOut";
import {UserRole} from "../../types/generated/generated"
import "./CustomDrawer.module.css"
interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const CustomDrawer = (props: Props) => {
  const closeButtonSize = useBreakpointValue({ base: "lg", lg: "xl" });
  const { isOpen } = useDisclosure({ isOpen: props.isOpen });

  return (
    <Drawer
      placement="right"
      onClose={props.onClose}
      isOpen={isOpen}
      size="xs"
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader
          as={Flex}
          justifyContent="space-between"
          alignItems="center"
          flexDirection="row"
        >
          <Heading fontWeight="normal" p={3}>Our Menu</Heading>
          <DrawerCloseButton
            variant="unstyled"
            mt={3}
            mr={3}
            p={2}
            outline="none"
            borderRadius="50%"
            size={closeButtonSize}
          />
        </DrawerHeader>
        <DrawerBody overflow="hidden">
        <Flex flexDirection="column" height="100%" justifyContent="space-between" className="menu-links"
        fontSize="2vw" p={3} width="center" alignItems="center" color={'white'}>
          <Flex zIndex="2" letterSpacing="1px" color="#fff" flexDirection="column" height="80%" width="100%" justifyContent="space-around" alignItems="center">
          < Link to={`/${role}/${data?.me?.name}`}>My Profile</Link>
            <Link to="/helpdesk">Help Desk</Link>
            <Link to="/contactus">Contact Us</Link>
            {data?.me ? <Button onClick={LogOut}>Sign Out</Button> : <Button isDisabled>Sign Out</Button> }
          </Flex>
          <Flex height="50%"  width="80%" margin="auto" justifyContent="space-between" alignItems="flex-end">
            <a href="https://www.instagram.com/shaastra_iitm/?hl=en\"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://www.facebook.com/Shaastra/"><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></a>
            <a href="https://in.linkedin.com/company/shaastra-iit-madras"><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></a>
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
