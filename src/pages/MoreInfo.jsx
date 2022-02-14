import { ListOfCards } from '../container/ListOfCards'
import { API } from '../api/config'
import { useApi } from '../hooks/useApi'
import { Card } from '../components/CardsPages'
import { useLocation, useParams } from 'react-router-dom'

export const MoreInfo = () => {
  const { category } = useParams()
  const { pathname } = useLocation()
  const { data, loading } = useApi(
    `${API.BASE_URL}/${pathname}?offset=0&limit=40&${API.CREDENTIALS}`
  )
  return (
    <ListOfCards>
      <Card data={data} loading={loading} path={category} />
    </ListOfCards>
  )
}
