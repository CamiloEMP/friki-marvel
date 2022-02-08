import { Box, Center, Stack, Image, Link, Text, Tag } from '@chakra-ui/react'
import { useLocation, useParams } from 'react-router-dom'
import { API } from '../../constants'
import { useApi } from '../hooks/useApi'
import { Spinner } from '../Spinner'
import { Anchor } from '../Anchor'

export const CharacterId = () => {
  const { characterId } = useParams()
  const { pathname } = useLocation()
  const { loading, data } = useApi(
    `${API.BASE_URL}/characters/${characterId}?${API.CREDENTIALS}`
  )
  if (loading) {
    return (
      <Center>
        <Spinner />
      </Center>
    )
  } else {
    return data.map((character) => (
      <Stack key={character.id} w="100%" h="100%">
        <Box w="100%" position="relative" mb={4}>
          <Image
            w="100%"
            h="450px"
            fit="cover"
            src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
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
            {character.name}
          </Text>
        </Box>
        <Stack gap={4} fontSize="xl" px={4} >
          <Text>{character.description}</Text>
          <Stack>
            <Text>
              If you are interested in {character.name}
              you can see more about him...
            </Text>
            <Stack direction="row" flexWrap="wrap" gap={2}>
              {character.comics.available !== 0 && (
                <Tag
                  variant="solid"
                  fontWeight="semibold"
                  colorScheme="red"
                  size="lg"
                >
                  <Anchor to={`${pathname}/comics`}>
                    Comics
                  </Anchor>
                </Tag>
              )}
              {character.events.available !== 0 && (
                <Tag
                  variant="solid"
                  fontWeight="semibold"
                  colorScheme="red"
                  size="lg"
                >
                  <Anchor to={`${pathname}/events`}>
                    Events
                  </Anchor>
                </Tag>
              )}
              {character.series.available !== 0 && (
                <Tag
                  variant="solid"
                  fontWeight="semibold"
                  colorScheme="red"
                  size="lg"
                >
                  <Anchor to={`${pathname}/series`}>
                    Series
                  </Anchor>
                </Tag>
              )}
              {character.stories.available !== 0 && (
                <Tag
                  variant="solid"
                  fontWeight="semibold"
                  colorScheme="red"
                  size="lg"
                >
                  <Anchor to={`${pathname}/stories`}>
                    Stories
                  </Anchor>
                </Tag>
              )}
            </Stack>
          </Stack>
          <Box>
            <Text>See more information</Text>
            {character.urls.map((item, index) => (
              <Link key={index} href={item.url} isExternal mr={4}>
                {item.type}
              </Link>
            ))}
          </Box>
        </Stack>
      </Stack>
    ))
  }
}
