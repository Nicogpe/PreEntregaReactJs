import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Box,
    Button,
    Heading,
    Center
  } from '@chakra-ui/react'
  import { Flex, Spacer } from '@chakra-ui/react'
  import { FaChevronDown } from "react-icons/fa6";

const NavBar = () => {
  return (
    <Flex h={'10vh'} w={'100%'} justify={'space-around'} alignItems={'center'} backgroundColor={'#F1FAEE'}>
        <Heading>Logo</Heading>
        <Menu>
            <MenuButton as={Button} rightIcon={<FaChevronDown />}>
                Actions
            </MenuButton>

            <MenuList>
                <MenuItem>Download</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Attend a Workshop</MenuItem>
            </MenuList>
        </Menu>

        <CartWidget/>
    </Flex>
  )
}

export default NavBar