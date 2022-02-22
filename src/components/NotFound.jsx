import {
  Alert,
  AlertIcon,
  AlertTitle,
  Center,
  Button
} from '@chakra-ui/react'

import { Link } from 'react-router-dom'

export const NotFound = () => {
  return (
    <Center>
      <Alert
        status='error'
        variant='top-accent'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        gap={2}
        textAlign='center'
        height='200px'
        maxW="320px">
        <AlertIcon boxSize='40px' />
        <AlertTitle fontSize='lg'>Your search does not exist!</AlertTitle>
        <AlertTitle fontSize='lg'>404</AlertTitle>
        <Button as={Link} to="/" colorScheme="red">Go to home</Button>
      </Alert>
    </Center>
  )
}
