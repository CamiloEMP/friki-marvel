import { Tag as TagChakra } from '@chakra-ui/react'

export const Tag = ({ children, ...rest }) => {
  return (
    <TagChakra
      variant="solid"
      fontWeight="semibold"
      colorScheme="red"
      size="lg"
      {...rest}
    >
      { children }
    </TagChakra>
  )
}
