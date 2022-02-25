import { Button, ButtonGroup, IconButton, Tooltip } from '@chakra-ui/react'
import { ImPrevious, ImNext, ImForward2, ImBackward } from 'react-icons/im'

export const ButtonPages = ({ props }) => {
  const { handleBackPage, handleNextPage, handleBackTenPages, handleNextTenPages, isDisabled, page } = props

  return (
    <ButtonGroup isAttached variant="ghost" colorScheme="red" size="lg" >
      <Tooltip label='Back Ten Pages' shouldWrapChildren fontSize="md" fontWeight="bold" >
        <IconButton onClick={handleBackTenPages} isDisabled={isDisabled.backTen} icon={<ImBackward fontSize={26} />}/>
      </Tooltip>

      <IconButton onClick={handleBackPage} isDisabled={isDisabled.back} icon={<ImPrevious fontSize={26} />}/>
      <Button as="div" isDisabled>Page {page}</Button>
      <IconButton onClick={handleNextPage} isDisabled={isDisabled.next} icon={<ImNext fontSize={26} />}/>

      <Tooltip label='Next Ten Pages' shouldWrapChildren fontSize="md" fontWeight="bold">
        <IconButton onClick={handleNextTenPages} isDisabled={isDisabled.nextTen} icon={<ImForward2 fontSize={26} />}/>
      </Tooltip>
    </ButtonGroup>
  )
}
