import { Box, Link, Stack, Text } from '@chakra-ui/react'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
export const Footer = () => {
  return (
    <Stack spacing={4} bgColor="primary" mt={8} paddingY={8} textAlign="center" fontWeight="bold" fontSize="xl">
      <Stack direction="row" justify="center" align="center">
        <Text>Proyect created by Camilo Mora</Text>
        <Box as={Link} href="https://www.linkedin.com/in/camilo-mora/" isExternal _hover={{ transform: 'scale(1.1)' }}>
          <IoLogoLinkedin fontSize="40" cursor="pointer"/>
        </Box>
        <Text>This is the repository that project</Text>
        <Box as={Link} href="https://github.com/CamiloEMP/friki-marvel" isExternal _hover={{ transform: 'scale(1.1)' }}>
          <IoLogoGithub fontSize="40" cursor="pointer"/>
        </Box>
      </Stack>
      <Box>
        <Text>Data provided by Marvel. © 2022 MARVEL</Text>
      </Box>
    </Stack>
  )
}
