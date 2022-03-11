import { SimpleGrid } from '@chakra-ui/react'

export const ListOfCards = ({ children }) => {
  return (
    <SimpleGrid
      minChildWidth="240px"
      spacing={6}
      marginBottom={12}
      paddingLeft={4}
    >
      {children}
    </SimpleGrid>
  )
}
