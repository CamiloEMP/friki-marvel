import { Box, Stack, Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { IoArrowBack } from 'react-icons/io5'

export const NotCharacters = () => {
  const navigate = useNavigate()
  return (
    <Stack alignItems="center">
      <Box p={12}>
        <Text fontSize="2xl" fontWeight="semibold" >
          There are no results for your choice
        </Text>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          cursor="pointer"
          fontSize="xl"
          border="4px"
          borderColor="primary"
          padding={1}
          onClick={() => navigate(-1)}
          transition="200ms ease"
          _hover={{ bgColor: 'red', transition: '200ms ease-out', color: 'white' }}
        >
          <IoArrowBack />
          <Text fontWeight="semibold">Go Back</Text>
        </Stack>
      </Box>
    </Stack>
  )
}
