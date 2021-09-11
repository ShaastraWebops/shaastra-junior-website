import React, { ReactNode, useContext } from 'react';
import { Link } from 'react-router-dom';
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
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { ReactComponent as LogoBlack } from "./../../images/logo/static/Main_logo_black.svg"
import user from '../../images/user.png';
import { Usercontext } from '../pages/signinUp/Context';

const Links = ['Home','Competitions', 'WorkShops', 'Championship','Shows', 'Signin/Register'];

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    to={'#'}>
    {children}
  </Link>
);

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {role} = useContext(Usercontext);
  return (
  <Box zIndex="5">
    <Box bg={'gray.100'} px={4}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <IconButton
          size={'md'}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={'Open Menu'}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems={'center'}>
          <Box>
            <LogoBlack width="88" className="header-logo" />
          </Box>
          <HStack
            as={'nav'}
            spacing={4}
            display={{ base: 'none', md: 'flex' }}>
            <Link to="/">Home</Link>
            <Link to="/competitions">Competitions</Link>
            <Link to="/workshops">Workshops</Link>
            <Link to="/shows">Shows</Link>
            <Link to="/championships">Championship</Link>
            {
              role === "USER" || role ==="ADMIN" ? null : <Link to="/signin">Login/Register</Link>
            }
          </HStack>
        </HStack>
        <Flex alignItems={'center'} letterSpacing="1px">
          <Menu>
            <MenuButton
              as={Button}
              rounded={'full'}
              variant={'link'}
              cursor={'pointer'}
              minW={0}
              >
              <Avatar size={'sm'} style={{display: "flex", justifyContent: "center", alignItems: "center"}} src={user}/>
            </MenuButton>
            <MenuList zIndex="10">
              <Link to="/profile"><MenuItem>My Profile</MenuItem></Link>
              <Link to="/helpdesk"><MenuItem>Help Desk</MenuItem></Link>
              <MenuDivider />
              <Link to="/contactus"><MenuItem>Contact Us</MenuItem></Link>
              {
                role === "ADMIN" || role === "USER" ? <Link to="/logout"><MenuItem>Sign Out</MenuItem></Link> : null
              }
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4}>
            {/* {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))} */}
            <NavLink key={1}><Link to="/">Home</Link></NavLink>
            <NavLink key={1}><Link to="/workshops">Workshops</Link></NavLink>
            <NavLink key={1}><Link to="/competitions">Competitions</Link></NavLink>
            <NavLink key={1}><Link to="/shows">Shows</Link></NavLink>
            <NavLink key={1}><Link to="/championships">Championship</Link></NavLink>
            {
              role === "USER" || role ==="ADMIN" ? null : <NavLink key={1}><Link to="/signin">Signin/Register</Link></NavLink>
            }
          </Stack>
        </Box>
      ) : null}
    </Box>
  </Box>
  );
}