import { Link } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

export const Anchor = ({ children, ...rest }) => {
  return (
    <Link as={RouterLink} {...rest}>
      { children }
    </Link>
  )
}
