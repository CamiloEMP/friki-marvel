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
    <Stack direction="row" alignItems="center" marginTop={12}>
      <Input
        value={searchedValue}
        variant='flushed'
        width="auto"
        size="lg"
        pl={2}
        focusBorderColor='red.500'
        onChange={(e) => setSearchedValue(e.target.value)}
        placeholder='Search by initial letters' />
      <Button
        colorScheme="red"
        type='button'
        size="sm"
        onClick={handleSearch}
      >
        Search
      </Button>
    </Stack>
  )
}
