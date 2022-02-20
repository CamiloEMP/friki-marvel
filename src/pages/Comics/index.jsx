import { Card } from '../../components/CardsPages'
import { InputSearch } from '../../components/InputSearch'

import { ListOfCards } from '../../container/ListOfCards'
import { useApi } from '../../hooks/useApi'

export const Comics = () => {
  const { data, loading, setSearch } = useApi('comics')

  return (
    <>
      <InputSearch setSearch={setSearch} />
      <ListOfCards>
        <Card data={data} path='comics' loading={loading} />
      </ListOfCards>
    </>
  )
}
