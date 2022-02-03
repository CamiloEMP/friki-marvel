import { Link } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

export const Anchor = ({ text, ...rest }) => {
  return (
    <Link as={RouterLink} {...rest}>
      {text}
    </Link>
  )
}
