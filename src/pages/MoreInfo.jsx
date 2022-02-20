import { ListOfCards } from '../container/ListOfCards'
import { useApi } from '../hooks/useApi'
import { Card } from '../components/CardsPages'
import { useLocation, useParams } from 'react-router-dom'

export const MoreInfo = () => {
  const { category } = useParams()
  const { pathname } = useLocation()
  const { data, loading } = useApi(`${pathname}`)
  return (
    <ListOfCards>
      <Card data={data} loading={loading} path={category} />
    </ListOfCards>
  )
}
