import { Stack } from '@chakra-ui/react'
import { Anchor } from './Anchor'

export const Sidebar = ({ onClose }) => {
  return (
    <Stack
      direction={{ md: 'row', base: 'column' }}
      justify="space-evenly"
      spacing={12}
      fontSize="xl"
      padding={4}>
      <Anchor
        to={'/characters'}
        text={'Characters'}
        onClick={onClose} />
      <Anchor
        to={'/comics'}
        text={'Comics'}
        onClick={onClose} />
      <Anchor
        to={'/events'}
        text={'Events'}
        onClick={onClose} />
      <Anchor
        to={'/stories'}
        text={'Stories'}
        onClick={onClose} />
      <Anchor
        to={'/series'}
        text={'Series'}
        onClick={onClose} />
    </Stack>
  )
}
