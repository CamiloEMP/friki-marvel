import {
  AspectRatio,
  Box,
  Image,
  Text,
  Spinner
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'

export const CardCharacter = () => {
  const [characters, setCharacters] = useState([])
  const [loader, setLoader] = useState(false)

  useEffect(() => {
    setLoader(true)
    fetch(`${import.meta.env.VITE_APP_BASE_URL}/characters?offset=0&${import.meta.env.VITE_APP_CREDENTIALS_API}`)
      .then(res => res.json())
      .then(data => {
        setCharacters(data.data.results)
        setLoader(false)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      {loader
        ? <Box display="grid" gridColumn="2" justifyItems="center" >
          <Spinner
            color="primary"
            size="xl"
            thickness='5px'
            speed='0.65s' />
        </Box>
        : characters.map(character => (
          <Box
            key={character.id}
            maxW="360px"
            textAlign="center"
            fontWeight="normal"
          >
            <Text fontSize="2xl">{character.name}</Text>
            <AspectRatio maxW="360px" ratio={16 / 9} >
              <Image src={`${character.thumbnail.path}.${character.thumbnail.extension}`}/>
            </AspectRatio>
          </Box>
        ))
      }

    </>
  )
}
console.log(!'')
