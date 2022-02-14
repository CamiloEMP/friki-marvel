import { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import {
  AspectRatio,
  Box,
  Image,
  Text,
  Button,
  Collapse,
  Stack
} from '@chakra-ui/react'
import { Loading } from './Loading'

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
      {data.map(item => (
        <Stack key={item.id} minW="320px" maxW="400px" fontWeight="normal" spacing={4}>
          <Box
            as={RouterLink}
            to={`/${path}/${item.id}`}
            cursor="pointer"
            transition="200ms ease-in-out"
            transform="auto"
            _hover={{ translateY: -2 }}
          >
            <Text
              bgColor="primary"
              fontSize="2xl"
              textAlign="center"
              fontWeight="bold"
              py={2}
              px={1}
              isTruncated
            >
              {item.name ? item.name : item.title}
            </Text>
            <AspectRatio maxW="400px" height="360px" ratio={16 / 9}>
              <Image src={`${item.thumbnail.path}.${item.thumbnail.extension}`} />
            </AspectRatio>
          </Box>
          <Button onClick={() => toggle(item.id)}>View Description</Button>
          <Collapse in={textWrapper === item.id} animateOpacity>
            <Text textAlign="start">
              {item.description || 'No description provided'}
            </Text>
          </Collapse>
        </Stack>
      )
      )}
    </>
  )
}