import { Container } from '@chakra-ui/react'
import { ModalAboutMe } from '../components/ModalAboutMe'

export const Layout = ({ children }) => {
  return (
    <Container maxW="container.xl" position="relative" >
      <ModalAboutMe/>
      {children}
    </Container>
  )
}
