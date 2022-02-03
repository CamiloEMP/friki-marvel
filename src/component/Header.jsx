import { Nav } from './Nav'
import { Link } from 'react-router-dom'

import { Heading, Text, Box, useDisclosure } from '@chakra-ui/react'

import { GiSpiderMask } from 'react-icons/gi'

export const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Heading as="header" mt={5} position="relative" textAlign="center">
        <Link to="/">
          <Text
            px={8}
            py={4}
            bg="primary"
            fontWeight="bold"
            fontSize={{ base: '5xl', md: '7xl' }}
            letterSpacing={-3}
          >
            FRIKI MARVEL
          </Text>
        </Link>
        <Box
          position="absolute"
          right="20px"
          top="24px"
          display={{ base: 'block', md: 'none' }}
        >
          <GiSpiderMask cursor="pointer" fontSize={44} onClick={onOpen} />
        </Box>
      </Heading>
      <Nav isOpen={isOpen} onClose={onClose} />
    </>
  )
}
