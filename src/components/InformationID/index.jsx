import { useEffect, useState } from 'react'
import { HeaderID } from './HeaderID'
import { Tag } from '../Tag'
import { Loading } from '../Loading'

import { useLocation, useParams, Link as RouterLink } from 'react-router-dom'
import { getCategoryID } from '../../helpers/getCategoryID'

import { Box, Stack, Link, Text, Button } from '@chakra-ui/react'
import { FiExternalLink } from 'react-icons/fi'

export const InformationID = ({ category }) => {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)

  const { pathname } = useLocation()
  const { id } = useParams()

  useEffect(() => {
    getCategoryID(category, id)
      .then(data => {
        setData(data)
        setLoading(false)
      })
  }, [])

  return (
    <>
      {loading
        ? <Loading />
        : <Stack key={data.id} w="100%" h="100%" marginBottom={8}>
          <HeaderID
            image={`${data.thumbnail.path}.${data.thumbnail.extension}`}
            title={data.title}
            alt={data.title}
          />
          <Stack gap={4} fontSize="xl" px={4} >
            <Box>
              <Text fontWeight="bold" fontSize="3xl">Description</Text>
              <Text>{data.description}</Text>
            </Box>
            <Stack>
              <Text fontWeight="semibold" >If you are interested in {data.title} you can see more about him...</Text>
              <Stack direction="row" flexWrap="wrap" gap={2} fontWeight="bold" textAlign="center">
                <Button
                  as={RouterLink}
                  to={`${pathname}/characters`}
                  colorScheme="red"
                  variant="ghost">
                  CHARACTERS FOR THIS {category.toUpperCase()}
                </Button>
              </Stack>
            </Stack>
            <Box>
              <Text marginBottom={2} fontWeight="bold" fontSize="2xl">See more information</Text>
              {data.urls.map((item, index) => (
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
      )
    </>
  )
}
