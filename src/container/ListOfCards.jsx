import { Grid } from '@chakra-ui/react'

export const ListOfCards = ({ children }) => {
  return (
    <Grid
      templateColumns={{ md: 'repeat(3, 1fr)', sm: 'repeat(2, 1fr)' }}
      gap={6}
      marginTop={12}>
      {children}
    </Grid>
  )
}
