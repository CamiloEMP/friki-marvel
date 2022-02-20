import { Card } from '../../components/CardsPages'
import { InputSearch } from '../../components/InputSearch'

import { ListOfCards } from '../../container/ListOfCards'
import { useApi } from '../../hooks/useApi'

export const Series = () => {
  const { data, loading, setSearch } = useApi('series')

  return (
    <>
      <InputSearch setSearch={setSearch}/>
      <ListOfCards>
        <Card data={data} path='series' loading={loading} />
      </ListOfCards>
    </>
  )
}
