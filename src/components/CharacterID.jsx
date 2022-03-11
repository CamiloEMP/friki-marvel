import { useEffect, useState } from 'react'
import { HeaderID } from './InformationID/HeaderID'
import { Loading } from './Loading'
import { Anchor } from './Anchor'
import { Tag } from './Tag'

import { useLocation, useParams } from 'react-router-dom'
import { getCategoryID } from '../helpers/getCategoryID'

import { Box, Stack, Link, Text } from '@chakra-ui/react'
import { FiExternalLink } from 'react-icons/fi'

export const CharacterId = () => {
  const [character, setCharacter] = useState({})
  const [loading, setLoading] = useState(true)
  const { characterId } = useParams()
  const { pathname } = useLocation()

  useEffect(() => {
    getCategoryID('characters', characterId)
      .then(data => {
        setCharacter(data)
        setLoading(false)
      })
  }, [])

  return (
    <>
      {loading
        ? <Loading />
        : <Stack key={character.id} w="100%" h="100%" marginBottom={8}>
          <HeaderID
            image={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            alt={character.name}
            title={character.name}
          />
          <Stack gap={4} fontSize="xl" px={4} >
            <Text>{character.description}</Text>
            <Stack>
              <Text> If you are interested in {character.name} you can see more about him...</Text>
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
                  <Link display="flex" gap={1} alignItems="center" href={item.url} isExternal>
                    {item.type} <FiExternalLink/>
                  </Link>
                </Tag>
              ))}
            </Box>
          </Stack>
        </Stack>
      }
    </>
  )
}
