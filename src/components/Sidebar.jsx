import { Stack } from '@chakra-ui/react'
import { Anchor } from './Anchor'

export const Sidebar = ({ onClose }) => {
  return (
    <Stack
      direction={{ md: 'row', base: 'column' }}
      justify="space-evenly"
      spacing={12}
      fontSize="2xl"
      padding={4}
      fontWeight="bold"
    >
      <Anchor to={'/characters'} onClick={onClose}>
        Characters
      </Anchor>
      <Anchor to={'/comics'} onClick={onClose}>
        Comics
      </Anchor>
      <Anchor to={'/events'} onClick={onClose}>
        Events
      </Anchor>
      <Anchor to={'/series'} onClick={onClose}>
        Series
      </Anchor>
    </Stack>
  )
}
