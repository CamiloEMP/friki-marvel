import { Card } from '../../components/CardsPages'
import { InputSearch } from '../../components/InputSearch'

import { ListOfCards } from '../../container/ListOfCards'
import { useApi } from '../../hooks/useApi'

export const Character = () => {
  const { data, loading, setSearch } = useApi('characters', 'nameStartsWith')

  return (
    <>
      <InputSearch setSearch={setSearch} />
      <ListOfCards>
        <Card data={data} path='characters' loading={loading} />
      </ListOfCards>
    </>
  )
}
