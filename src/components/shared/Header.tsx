import * as React from "react";
import { Box, Flex } from "@chakra-ui/layout";
import CustomDrawer from "./CustomDrawer";
import { useDisclosure } from "@chakra-ui/hooks";
import { HamburgerIcon } from "@chakra-ui/icons";
import { ReactComponent as LogoBlack } from "./../../images/logo/static/Main_logo_black.svg"
import { ReactComponent as LogoWhite } from "./../../images/logo/static/Main_logo_white.svg"
import { useColorModeValue } from "@chakra-ui/color-mode";
import { useBreakpointValue } from "@chakra-ui/media-query";
import { Link } from "react-router-dom";
import "../../styles/header.css"

interface Props {}

const Header = (props: Props) => {
    
    const { onOpen, isOpen, onClose } = useDisclosure();
    
    const drawerOpenHandler = () => {
      onOpen();
    };

    const height = useBreakpointValue({ base: "33", lg: "40" })
  return (
    <Flex w="100vw" overflow="hidden" position="absolute" p={3} flexDirection="row" className="header" 
    justifyContent="space-between" alignItems="center" height="min">
      <CustomDrawer onClose={onClose} isOpen={isOpen} />
      
      <Flex w="fit-content" justifyContent="space-between" alignItems="center" className="header-links">
        <Link to="/" >
          <LogoBlack height={height} width="88" className="header-logo"/>
        </Link>
        <Link to="/">Home</Link>
        <Link to="/competitions">Competitions</Link>
        <Link to="/workshops">Workshops</Link>
        <Link to="/shows">Shows</Link>
        <Link to="/championships">Championship</Link>
      </Flex>
      {/* <Box>
        <ColorModeSwitcher justifySelf="flex-end" />
        <HamburgerIcon w={{base: 6, lg: 8}} h={{base: 6, lg: 8}} m={3} onClick={drawerOpenHandler} />
      </Box> */}
      <HamburgerIcon w={{base: 6, lg: 8}} h={{base: 6, lg: 8}} m={3} onClick={drawerOpenHandler} className="hamburger" />
    </Flex>
  );
};

export default Header;
