import { Image, Box, Text } from '@chakra-ui/react'
import marvel2 from '../assets/marvel1.jpeg'
import { Footer } from '../components/Footer'

export const Home = () => {
  return (
    <>
      <Box>
        <Box w="100%" h="lg">
          <Image src={marvel2} w="full" h="full" objectFit="cover" objectPosition="top" />
        </Box>
        <Text fontWeight="normal">Hello I`m Camilo Mora</Text>
      </Box>
      <Footer/>
    </>
  )
}
