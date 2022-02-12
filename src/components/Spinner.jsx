import { Spinner as SpinnerChakra } from '@chakra-ui/react'

import React from 'react'

export const Spinner = () => {
  return (
    <SpinnerChakra
      color="primary"
      size="xl"
      thickness='5px'
      speed='0.65s' />
  )
}
