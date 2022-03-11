import { Center, Spinner } from '@chakra-ui/react'

export const Loading = () => {
  return (
    <Center>
      <Spinner
        color="primary"
        size="xl"
        thickness='5px'
        speed='.7s'
        mt={8} />
    </Center>
  )
}
