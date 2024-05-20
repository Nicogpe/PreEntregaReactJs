import { Box } from '@chakra-ui/react'
import { IoCartOutline } from "react-icons/io5";
import React from 'react'

const CartWidget = () => {
  return (
    <Box fontSize={'2xl'}>
        <IoCartOutline />
    </Box>
  )
}

export default CartWidget