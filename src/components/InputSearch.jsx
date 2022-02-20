import { Stack, Input, Button } from '@chakra-ui/react'
import { useState } from 'react'

export const InputSearch = ({ setSearch }) => {
  // nameStartsWith titleStartsWith
  const [searchedValue, setSearchedValue] = useState('')
  const handleSearch = () => {
    setSearch(searchedValue)
    setSearchedValue('')
  }
  return (
    <Stack direction="row">
      <Input
        value={searchedValue}
        variant='flushed'
        width="auto"
        htmlSize={4}
        focusBorderColor="red"
        size="lg"
        onChange={(e) => setSearchedValue(e.target.value)}
        placeholder='Search by initial letters' />
      <Button
        colorScheme="red"
        type='button'
        size="lg"
        onClick={handleSearch}
      >
        Search
      </Button>
    </Stack>
  )
}
