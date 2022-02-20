import { Container } from '@chakra-ui/react'

export const Layout = ({ children }) => {
  return (
    <Container alignSelf="center" maxW="container.xl" position="relative" >
      {children}
    </Container>
  )
}
