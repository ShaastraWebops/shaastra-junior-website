import * as React from "react";
import { Flex } from "@chakra-ui/layout";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay
} from "@chakra-ui/modal";
import { useDisclosure } from "@chakra-ui/hooks";
import { useBreakpointValue } from "@chakra-ui/media-query";
import {Box, Button} from "@chakra-ui/react"
import {faInstagram, faLinkedin, faFacebook} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../../styles/header.css"
import { Link } from "react-router-dom";
import { useGetProfileQuery} from "../../types/generated/generated";
import {Redirect, useHistory} from "react-router"
import { useContext } from "react";
import { Usercontext } from "../pages/signinUp/Context"
import LogOut from "../pages/signinUp/LogOut";
interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const CustomDrawer = (props: Props) => {
  const closeButtonSize = useBreakpointValue({ base: "xs", lg: "md" });
  const { isOpen } = useDisclosure({ isOpen: props.isOpen });
  const role = useContext(Usercontext)
  const {data,loading,error} = useGetProfileQuery()
  const history = useHistory()
  // const logOut = async () => {

  //   const resp = await logOutMutation();
  //   return (history.push('/'))
  // }
  console.log(data)

  return (
    <Drawer
      placement="right"
      onClose={props.onClose}
      isOpen={isOpen}
      size="xs"
    >
      <DrawerOverlay  />
      <DrawerContent backgroundColor="rgba(176, 219, 190, 0.73)" color="black">
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
        fontSize="2vw" p={3} width="center" alignItems="center" color={'black'}>
          <Flex flexDirection="column" height="80%" width="100%" justifyContent="space-around" alignItems="center">
          {data?.me ? < Link to="/profile">My Profile</Link> : null}
            <Link to="/helpdesk">Help Desk</Link>
            <Link to="/contactus">Contact Us</Link>
            {data?.me ? <Link to="/logout">Sign Out</Link> : null }
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
