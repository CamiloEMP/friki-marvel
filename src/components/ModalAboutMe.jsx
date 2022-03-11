import { SocialMedia } from './SocialMedia'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Box
} from '@chakra-ui/react'
import { BsQuestionDiamondFill } from 'react-icons/bs '

export const ModalAboutMe = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box display={{ base: 'none', md: 'block' }} position="absolute" right="10" top="4">
      <Box as="button">
        <BsQuestionDiamondFill fill='red' fontSize={44} onClick={onOpen}/>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody padding={8}>
            <SocialMedia />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  )
}
