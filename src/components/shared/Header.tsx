import React, { ReactNode } from 'react';
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

const Links = ['Home','Competitions', 'WorkShops', 'Championship','Shows', 'Signin/Register'];

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    to={'#'}>
    {children}
  </Link>
);

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
  <Box zIndex="1">
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
            <Link to="/championships">Championship</Link>
            <Link to="/shows">Shows</Link>
            <Link to="/signin">Login/Register</Link>
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
            <MenuList>
              <MenuItem><Link to="/profile">My Profile</Link></MenuItem>
              <MenuItem><Link to="/helpdesk">Help Desk</Link></MenuItem>
              <MenuDivider />
              <MenuItem><Link to="/contactus">Contact Us</Link></MenuItem>
              <MenuItem><Link to="/logout">Sign Out</Link></MenuItem>
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
            <NavLink key={1}><Link to="/workshops">WorkShops</Link></NavLink>
            <NavLink key={1}><Link to="/competitions">Competitions</Link></NavLink>
            <NavLink key={1}><Link to="/championships">Championship</Link></NavLink>
            <NavLink key={1}><Link to="/shows">Shows</Link></NavLink>
            <NavLink key={1}><Link to="/signin">Signin/Register</Link></NavLink>
          </Stack>
        </Box>
      ) : null}
    </Box>
  </Box>
  );
}