import { Flex, Heading } from '@chakra-ui/react'
import React from 'react'

const ItemListContainer = ({title}) => {
  return (
    <Flex justify={'center'} align={'center'} m={10}>
        <Heading>{title}</Heading>
    </Flex>
  )
}

export default ItemListContainer