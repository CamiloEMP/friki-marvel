import { Box, Center, Stack, Link, Text } from '@chakra-ui/react'
import { useLocation, useParams } from 'react-router-dom'

import { Spinner } from '../../components/Spinner'
import { Anchor } from '../../components/Anchor'
import { HeaderID } from '../../components/InformationID/HeaderID'
import { useApi } from '../../hooks/useApi'
import { API } from '../../api/config'
import { Tag } from '../../components/Tag'

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
    return data.map(character => (
      <Stack key={character.id} w="100%" h="100%" marginBottom={8}>
        <HeaderID
          image={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          alt={character.name}
          title={character.name}
        />
        <Stack gap={4} fontSize="xl" px={4} >
          <Text>{character.description}</Text>
          <Stack>
            <Text>
              If you are interested in {character.name} you can see more about him...
            </Text>
            <Stack direction="row" flexWrap="wrap" gap={2}>
              {character.comics.available !== 0 && (
                <Tag>
                  <Anchor to={`${pathname}/comics`}>
                    Comics
                  </Anchor>
                </Tag>
              )}
              {character.events.available !== 0 && (
                <Tag>
                  <Anchor to={`${pathname}/events`}>
                    Events
                  </Anchor>
                </Tag>
              )}
              {character.series.available !== 0 && (
                <Tag>
                  <Anchor to={`${pathname}/series`}>
                    Series
                  </Anchor>
                </Tag>
              )}
              {character.stories.available !== 0 && (
                <Tag>
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
              <Tag key={index} marginRight={4}>
                <Link href={item.url} isExternal>
                  {item.type}
                </Link>
              </Tag>
            ))}
          </Box>
        </Stack>
      </Stack>
    ))
  }
}
