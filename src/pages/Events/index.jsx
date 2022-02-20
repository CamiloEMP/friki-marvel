import { Card } from '../../components/CardsPages'
import { InputSearch } from '../../components/InputSearch'

import { ListOfCards } from '../../container/ListOfCards'
import { useApi } from '../../hooks/useApi'

export const Events = () => {
  const { data, loading, setSearch } = useApi('events', 'nameStartsWith')

  return (
    <>
      <InputSearch setSearch={setSearch}/>
      <ListOfCards>
        <Card data={data} path='events' loading={loading} />
      </ListOfCards>
    </>
  )
}
