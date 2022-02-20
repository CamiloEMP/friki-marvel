import { extendTheme } from '@chakra-ui/react'

export default extendTheme({
  config: {
    initialColorMode: 'light'
  },
  colors: {
    brand: {
      100: '#e23636'
    },
    primary: '#e23636'
  },
  fonts: {
    heading: 'Raleway',
    body: 'Raleway'
  },
  fontWeights: {
    normal: 400,
    semibold: 700,
    bold: 900
  }
})
