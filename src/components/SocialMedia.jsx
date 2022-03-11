import { Stack, Text, Link, Button } from '@chakra-ui/react'

import {
  TiSocialGithubCircular,
  TiSocialLinkedinCircular,
  TiHeart
} from 'react-icons/ti'

export const SocialMedia = () => {
  return (
    <>
      <Stack direction="row" alignItems="center" fontSize="xl" justifyContent="center" marginBottom={4}>
        <Text fontWeight="semibold">Created by Camilo Mora</Text>
        <TiHeart fill="red" fontSize={40}/>
      </Stack>
      <Stack direction="row" justifyContent="center">
        <Button
          as={Link}
          colorScheme='red'
          paddingY={8}
          paddingX={6}
          leftIcon={<TiSocialGithubCircular fontSize={52} />}
          href="https://github.com/CamiloEMP/friki-marvel"
          fontSize="xl"
          isExternal
        >
          GitHub
        </Button>
        <Button
          as={Link}
          colorScheme='linkedin'
          paddingY={8}
          paddingX={6}
          leftIcon={<TiSocialLinkedinCircular fontSize={52} />}
          href="https://www.linkedin.com/in/camilo-mora/"
          fontSize="xl"
          isExternal
        >
          Linkedin
        </Button>
      </Stack>
    </>
  )
}
