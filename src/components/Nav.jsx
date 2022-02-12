import {
  Box, Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton
} from '@chakra-ui/react'
import { Sidebar } from './Sidebar'

export const Nav = ({ onClose, isOpen }) => {
  return (
    <>
      <Box
        borderY="4px"
        borderColor="primary"
        marginTop={4}
        marginBottom={8}
        display={{ base: 'none', md: 'block' }}
      >
        <Sidebar />
      </Box>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Select a option</DrawerHeader>
          <DrawerBody>
            <Sidebar onClose={onClose} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}
