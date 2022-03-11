import { Box, Text, Image } from '@chakra-ui/react'

export const HeaderID = ({ alt, image, title }) => {
  return (
    <Box w="100%" position="relative" my={8}>
      <Image
        w="100%"
        h="450px"
        fit="cover"
        src={image}
        alt={`Image ${alt}`}
      />
      <Text
        position="absolute"
        bottom="0px"
        w="100%"
        py={2}
        textAlign="center"
        fontSize="4xl"
        fontWeight="bold"
        color="primary"
        bgColor="blackAlpha.700"
      >
        {title}
      </Text>
    </Box>
  )
}
