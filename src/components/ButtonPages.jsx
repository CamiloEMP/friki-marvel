import { Button, ButtonGroup, IconButton, Tooltip } from '@chakra-ui/react'
import { ImPrevious, ImNext, ImForward2, ImBackward } from 'react-icons/im'
import { getCountPages } from '../utils/getCountPages'

export const ButtonPages = ({ props, totalCount, loading }) => {
  const { handleBackPage, handleNextPage, handleBackTenPages, handleNextTenPages, isDisabled, page } = props
  const numPages = getCountPages(totalCount)
  return (
    <ButtonGroup isAttached variant="ghost" colorScheme="red" size="lg">
      <Tooltip label='Back Ten Pages' shouldWrapChildren fontSize="md" fontWeight="bold" >
        <IconButton onClick={handleBackTenPages} isDisabled={isDisabled.backTen || loading} icon={<ImBackward fontSize={26} />}/>
      </Tooltip>

      <IconButton onClick={handleBackPage} isDisabled={isDisabled.back || loading} icon={<ImPrevious fontSize={26} />}/>
      <Button as="div" isDisabled>Page {page} of {numPages}</Button>
      <IconButton onClick={handleNextPage} isDisabled={isDisabled.next || loading} icon={<ImNext fontSize={26} />}/>

      <Tooltip label='Next Ten Pages' shouldWrapChildren fontSize="md" fontWeight="bold">
        <IconButton onClick={handleNextTenPages} isDisabled={isDisabled.nextTen || loading} icon={<ImForward2 fontSize={26} />}/>
      </Tooltip>
    </ButtonGroup>
  )
}
