import { Box, Center, HStack, Image, Text, VStack } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import { API } from '../../constants'
import { useApi } from '../hooks/useApi'
import { Spinner } from '../Spinner'

export const CharacterId = () => {
  const { characterId } = useParams()
  const { loading, data } = useApi(
    `${API.BASE_URL}/characters/${characterId}?${API.CREDENTIALS}`
  )
  console.log(data)
  if (loading) {
    return (
      <Center>
        <Spinner/>
      </Center>
    )
  } else {
    return data.map((character) => (
      <VStack key={character.id}>
        <Box w="100%" position="relative">
          <Image
            w="100%"
            h="450px"
            fit="cover"
            src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          />
          <Text
            fontSize={26}
            position="absolute"
            bottom="0px"
            w="100%"
            textAlign="center"
            bgColor="blackAlpha.700"
            py={2}
          >
            {character.name}
          </Text>
        </Box>
        <HStack>
          <Text>{character.description}</Text>
        </HStack>
      </VStack>
    ))
  }
}
