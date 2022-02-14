import { Box, Center } from '@chakra-ui/react'
import { Spinner } from './Spinner'

export const Loading = ({ type }) => {
  if (type) {
    return (
      <Center>
        <Spinner />
      </Center>
    )
  } else {
    return (
      <Box display="grid" gridColumn="2" justifyItems="center">
        <Spinner />
      </Box>
    )
  }
}
