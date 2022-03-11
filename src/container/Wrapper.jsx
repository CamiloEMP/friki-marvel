import { Stack } from '@chakra-ui/react'

export const Wrapper = ({ children }) => {
  return (
    <Stack direction={{ base: 'column', md: 'row' }} my={8} justifyContent="space-between" >
      {children}
    </Stack>
  )
}
