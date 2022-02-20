import { Nav } from './Nav'
import { Link } from 'react-router-dom'

import { Heading, Text, Box, useDisclosure } from '@chakra-ui/react'

import { GiHamburgerMenu } from 'react-icons/gi'

export const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Heading
        as="header"
        display={{ base: 'flex', md: 'block' }}
        alignItems="center"
        justifyContent="space-evenly"
        paddingButton={5}
        textAlign="center"
        bg="black"
        p={{ base: '2', md: '0' }}>
        <Box
          right="20px"
          top="24px"
          display={{ base: 'block', md: 'none' }}
        >
          <GiHamburgerMenu fill='#fff' cursor="pointer" fontSize={34} onClick={onOpen} />
        </Box>
        <Link to="/">
          <Text
            px={4}
            bg="primary"
            display="inline"
            fontSize={{ base: '4xl', md: '6xl' }}
            fontWeight="bold"
            color="white"
            letterSpacing={-4}
          >
            FRIKI MARVEL
          </Text>
        </Link>
        <Nav isOpen={isOpen} onClose={onClose} />
      </Heading>
    </>
  )
}
