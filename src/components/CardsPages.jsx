import { useState } from 'react'
import {
  AspectRatio,
  Image,
  Text,
  Button,
  Collapse,
  Stack
} from '@chakra-ui/react'

import { Loading } from './Loading'
import { Anchor } from './Anchor'
import { NotCharacters } from './NotCharacters'

export const Card = ({ data, loading, path }) => {
  const [textWrapper, setTextWrapper] = useState(null)
  function toggle (id) {
    if (textWrapper === id) {
      return setTextWrapper(null)
    }
    setTextWrapper(id)
  }
  return (
    <>
      {loading && <Loading/>}
      {!loading && data.length === 0 && <NotCharacters/>}
      {!loading && data.map(item => (
        <Stack key={item.id} maxW="260px" fontWeight="normal" spacing={4} >
          <Anchor
            to={`/${path}/${item.id}`}
            cursor="pointer"
            transition="200ms ease-in-out"
            transform="auto"
            _hover={{ translateY: -2 }}
          >
            <Text
              color="whitesmoke"
              bgColor="primary"
              fontSize="2xl"
              textAlign="center"
              fontWeight="bold"
              py={2}
              px={4}
              isTruncated
            >
              {item.name ? item.name : item.title}
            </Text>
            <AspectRatio maxW="full" ratio={4 / 3}>
              <Image loading='lazy' src={`${item.thumbnail?.path}.${item.thumbnail?.extension}`} />
            </AspectRatio>
          </Anchor>
          <Button colorScheme="red" fontWeight="900" fontSize="lg" variant="solid"
            onClick={() => toggle(item.id)} disabled={!item.description || item.description === ' '}>
              View Description
          </Button>
          <Collapse in={textWrapper === item.id} animateOpacity>
            <Text textAlign="start" fontSize="lg" >
              {item.description}
            </Text>
          </Collapse>
        </Stack>
      )
      )}
    </>
  )
}
