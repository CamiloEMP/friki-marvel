import { Grid, Stack } from '@chakra-ui/react'

export const ListOfCards = ({ children }) => {
  return (
    <Grid templateColumns='repeat(3, 1fr)' gap={6}>
      {children}
    </Grid>
  )
}
