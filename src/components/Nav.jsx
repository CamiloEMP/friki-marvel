import { Stack } from '@chakra-ui/react'
import { Anchor } from './Anchor'

export const Nav = ({ onClose }) => {
  return (
    <Stack
      direction={{ md: 'row', base: 'column' }}
      justify="space-evenly"
      fontSize={{ base: '2xl', md: 'sm' }}
      alignItems="center"
      paddingTop={4}
      paddingBottom={6}
      fontWeight="bold"
      width={{ md: '55%' }}
      margin={{ md: 'auto' }}
      textTransform="uppercase"
    >
      <Anchor to={'/'} onClick={onClose}>
        characters
      </Anchor>
      <Anchor to={'/comics'} onClick={onClose}>
        comics
      </Anchor>
      <Anchor to={'/events'} onClick={onClose}>
        events
      </Anchor>
      <Anchor to={'/series'} onClick={onClose}>
        series
      </Anchor>
    </Stack>
  )
}
