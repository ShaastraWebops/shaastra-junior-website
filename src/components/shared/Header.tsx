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
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { ReactComponent as LogoBlack } from "./../../images/logo/static/Main_logo_black.svg"
import { ReactComponent as LogoWhite } from "./../../images/logo/static/Main_logo_white.svg"
const Links = ['Competitions', 'WorkShops', 'Championship', 'Signin/Register'];

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    to={'#'}>
    {children}
  </Link>
);

export default function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
  <Box>
    <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
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
            <LogoWhite width="88" className="header-logo" />
          </Box>
          <HStack
            as={'nav'}
            spacing={4}
            display={{ base: 'none', md: 'flex' }}>
            <Link to="/">Home</Link>
            <Link to="/competitions">Competitions</Link>
            <Link to="/workshops">WorkShops</Link>
            <Link to="/championships">ChampionShip</Link>
            <Link to="/signin">Login/Register</Link>
          </HStack>
        </HStack>
        <Flex alignItems={'center'}>
          <Menu>
            <MenuButton
              as={Button}
              rounded={'full'}
              variant={'link'}
              cursor={'pointer'}
              minW={0}>
              <Avatar
                size={'sm'}
                src={
                  'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                }
              />
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
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  </Box>
  );
}