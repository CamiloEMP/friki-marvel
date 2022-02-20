import { SimpleGrid } from '@chakra-ui/react'

export const ListOfCards = ({ children }) => {
  return (
    <SimpleGrid
      minChildWidth="320px"
      spacing={6}
      marginTop={12}
      marginBottom={12}
      justifyItems={{ sm: 'center', md: 'normal', lg: 'normal' }}
    >
      {children}
    </SimpleGrid>
  )
}
