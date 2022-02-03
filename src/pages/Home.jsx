import { SimpleGrid, Image, AspectRatio, Box, Text } from '@chakra-ui/react'
import marvel from '../assets/marvel1.jpeg'
import marvel2 from '../assets/marvel2.jpg'

export const Home = () => {
  return (
    <Box>
      <Text fontWeight="normal">Hello I`m Camilo Mora</Text>
      <SimpleGrid
        columns={3}
        spacing={20}
        mt={8}>
        <AspectRatio maxW="320px" ratio={9 / 16}>
          <Image src={marvel} />
        </AspectRatio>
        <AspectRatio maxW="320px" ratio={9 / 16}>
          <Image src={marvel2} />
        </AspectRatio>
        <AspectRatio maxW="320px" ratio={9 / 16}>
          <Image src={marvel} />
        </AspectRatio>
      </SimpleGrid>
    </Box>
  )
}
