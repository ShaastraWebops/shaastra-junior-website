import React, { ReactNode, useContext } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { ReactComponent as LogoBlack } from "./../../images/logo/static/Main_logo_black.svg";
import user from "../../images/user.png";
import { Usercontext } from "../pages/signinUp/Context";
import "./../../styles/rainbow.css";
import Marquee from "react-fast-marquee";

const Links = [
  "Home",
  "Competitions",
  "WorkShops",
  "Championship",
  "Shows",
  "Signin/Register",
  "sales",
];

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link to={"#"}>{children}</Link>
);

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { role } = useContext(Usercontext);
  return (
    <Box zIndex="5">
      <Box bg={"gray.100"} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <Link to="/"><LogoBlack width="88" className="header-logo" /></Link>
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <Link to="/">Home</Link>
              <Link to="/competitions">Competitions</Link>
              <Link to="/workshops">Workshops</Link>
              <Link to="/sales"  target="_blank" ><div className="rainbow">Sales</div></Link>
              <Link to="/shows">Shows</Link>
              <Link to="/championships">Championship</Link>
              <Link to="/schedule">Schedule</Link>
              <Link to="/helpdesk">Helpdesk</Link>
              <Link to="/sales"  target="_blank">Sales</Link>
              <Link to="/virtualfunzone" >Virtual Funzone</Link>

              {/* <Link to="/sales">Sales</Link> */}
              {role === "USER" || role === "ADMIN" ? null : (
                <Link to="/signin">Login/Register</Link>
              )}
            </HStack>
          </HStack>
          <Flex alignItems={"center"} letterSpacing="1px">
            {localStorage.getItem("name") && (
              <Box fontSize="1vw" marginRight="5px" color="black">
                Hello {localStorage.getItem("name")}
              </Box>
            )}
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"sm"}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  src={user}
                />
              </MenuButton>
              <MenuList zIndex="10">
                {(role === "ADMIN" || role === "USER") && (
                  <Link to="/profile">
                    <MenuItem>My Profile</MenuItem>
                  </Link>
                )}
                <Link to="/contactus">
                  <MenuItem>Contact Us</MenuItem>
                </Link>
                {role === "ADMIN" || role === "USER" ? (
                  <Link to="/logout">
                    <MenuItem>Sign Out</MenuItem>
                  </Link>
                ) : (
                  <Link to="/signin">
                    <MenuItem>Sign In</MenuItem>
                  </Link>
                )}
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              <Link to="/">Home</Link>
              <Link to="/competitions">Competitions</Link>
              <Link to="/workshops">Workshops</Link>
              <Link to="/sales"  target="_blank"><div className="rainbow">Sales</div></Link>
            
              <Link to="/shows">Shows</Link>
              <Link to="/championships">Championship</Link>
              <Link to="/schedule">Schedule</Link>
              <Link to="/helpdesk">Helpdesk</Link>
              <Link to="/sales"  target="_blank">Sales</Link>
              <Link to="/virtualfunzone" >Virtual Funzone</Link>
              {role === "USER" || role === "ADMIN" ? null : (
                <Link to="/signin">Signin/Register</Link>
              )}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </Box>
  );
}
