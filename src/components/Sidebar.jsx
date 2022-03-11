import {
  Box, Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack
} from '@chakra-ui/react'
import { Nav } from './Nav'
import { SocialMedia } from './SocialMedia'

export const Sidebar = ({ onClose, isOpen }) => {
  return (
    <Box color="white">
      <Box display={{ base: 'none', md: 'block' }}>
        <Nav />
      </Box>
      <Drawer size="full" isFullHeight isOpen={isOpen} placement="bottom" onClose={onClose}>
        <DrawerOverlay/>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody pt={14} >
            <VStack position="relative" height="100%">
              <Nav onClose={onClose} />
              <Box position="absolute" bottom="50px">
                <SocialMedia/>
              </Box>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}
