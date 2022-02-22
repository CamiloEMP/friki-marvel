import {
  Box, Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton
} from '@chakra-ui/react'
import { Sidebar } from './Sidebar'

export const Nav = ({ onClose, isOpen }) => {
  return (
    <Box color="white">
      <Box
        marginBottom={8}
        display={{ base: 'none', md: 'block' }}
      >
        <Sidebar />
      </Box>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <Sidebar onClose={onClose} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}
