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
    <Stack direction="row" w="50%">
      <Input
        value={searchedValue}
        onChange={(e) => setSearchedValue(e.target.value)}
        placeholder='First name' />
      <Button
        mt={4}
        colorScheme='red'
        type='button'
        onClick={handleSearch}
      >
        Search
      </Button>
    </Stack>
  )
}
