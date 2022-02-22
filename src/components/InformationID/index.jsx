import { HeaderID } from './HeaderID'
import { Tag } from '../Tag'
import { Loading } from '../Loading'

import { useLocation, useParams, Link as RouterLink } from 'react-router-dom'
import { useApi } from '../../hooks/useApi'

import { Box, Stack, Link, Text } from '@chakra-ui/react'

export const InformationID = ({ category }) => {
  const { pathname } = useLocation()
  const { id } = useParams()
  const { loading, data } = useApi(`${category}/${id}`)
  const item = data[0]
  const imageSrc = `${item?.thumbnail.path}.${item?.thumbnail.extension}`

  return (
    <>
      {loading && <Loading />}
      <Stack key={item?.id} w="100%" h="100%" marginBottom={8}>
        <HeaderID
          image={imageSrc}
          title={item?.title}
          alt={item?.title}
        />
        <Stack gap={4} fontSize="xl" px={4} >
          <Box>
            <Text fontWeight="bold" fontSize="3xl">Description</Text>
            <Text>{item?.description}</Text>
          </Box>
          <Stack>
            <Text>If you are interested in {item?.title} you can see more about him...</Text>
            <Stack direction="row" flexWrap="wrap" gap={2} fontWeight="bold" textAlign="center">
              <Stack
                as={RouterLink}
                to={`${pathname}/characters`}
                maxW="200" height="100" border="2px" borderColor="primary" transition="200ms ease-in-out" _hover={{ backgroundColor: 'primary', textDecoration: 'none' }} justify="center">
                <Text>CHARACTERS FOR THIS {category.toUpperCase()}</Text>
              </Stack>
            </Stack>
          </Stack>
          <Box>
            <Text marginBottom={2} fontWeight="bold" fontSize="2xl">See more information</Text>
            {item?.urls.map((item, index) => (
              <Tag key={index} marginRight={4}>
                <Link href={item.url} isExternal>
                  {item.type}
                </Link>
              </Tag>
            ))}
          </Box>
        </Stack>
      </Stack>
    </>
  )
}
