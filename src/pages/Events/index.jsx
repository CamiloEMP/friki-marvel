import { useState } from 'react'
import { Card } from '../../components/CardsPages'

import { ListOfCards } from '../../container/ListOfCards'

import { useApi } from '../../hooks/useApi'
import { API } from '../../api/config'

export const Events = () => {
  const [offset, setOfset] = useState(0) // TODO: Hacer la paginacióin probablemente implementar un hook
  const { data, loading } = useApi(
    `${API.BASE_URL}/events?offset=0&limit=40&${API.CREDENTIALS}`,
    offset
  )

  return (
    <ListOfCards>
      <Card data={data} path='/events' loading={loading} />
    </ListOfCards>
  )
}
