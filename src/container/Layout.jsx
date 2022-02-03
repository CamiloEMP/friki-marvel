import { Container } from '@chakra-ui/react'

export const Layout = ({ children }) => {
  return (
    <Container alignSelf="center" maxWidth="lg" >
      {children}
    </Container>
  )
}
