import { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'

import { useApi } from '../hooks/useApi'
import { API } from '../../constants'
import { Spinner } from '../Spinner'

import {
  AspectRatio,
  Box,
  Image,
  Text,
  Button,
  Collapse,
  Stack
} from '@chakra-ui/react'

export const CardCharacter = () => {
  const [textWrapper, setTextWrapper] = useState(null)

  const [offset, setOfset] = useState(0) // TODO: Hacer la paginacióin
  const { data, loading } = useApi(`${API.BASE_URL}/characters?offset=0&limit=40&${API.CREDENTIALS}`, offset)

  function toggle (id) {
    if (textWrapper === id) {
      return setTextWrapper(null)
    }
    setTextWrapper(id)
  }
  return (
    <>
      {loading
        ? <Box display="grid" gridColumn="2" justifyItems="center" >
          <Spinner/>
        </Box>
        : data.map(character => (
          <Stack
            key={character.id}
            maxW="360px"
            fontWeight="normal"
            spacing={4}
          >
            <Box
              as={RouterLink}
              to={`/characters/${character.id}`}
              cursor="pointer"
              transition="200ms ease"
              _hover={{ transform: 'scale(1.05)' }}>
              <Text
                bgColor="primary"
                fontSize="2xl"
                textAlign="center"
                py={2}
                px={1}
              >
                {character.name}
              </Text>
              <AspectRatio maxW="360px" height="360px" ratio={16 / 9} >
                <Image src={`${character.thumbnail.path}.${character.thumbnail.extension}`}/>
              </AspectRatio>
            </Box>
            <Button onClick={() => toggle(character.id)}>View Description</Button>
            <Collapse in={textWrapper === character.id} animateOpacity >
              <Text textAlign="start" >{character.description || 'No description provided'}</Text>
            </Collapse>
          </Stack>
        ))
      }
    </>
  )
}
