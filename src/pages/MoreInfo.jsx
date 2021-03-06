import { useLocation, useParams } from 'react-router-dom'
import { Card } from '../components/CardsPages'
import { InputSearch } from '../components/InputSearch'
import { ButtonPages } from '../components/ButtonPages'
import { Wrapper } from '../container/Wrapper'

import { ListOfCards } from '../container/ListOfCards'
import { useApi } from '../hooks/useApi'
import { usePage } from '../hooks/usePage'

const SearchBy = {
  characters: 'nameStartsWith',
  comics: 'titleStartsWith',
  series: 'titleStartsWith',
  events: 'nameStartsWith'
}

export const MoreInfo = () => {
  const { category } = useParams()
  const { pathname } = useLocation()
  const toSearch = SearchBy[category]

  const { isDisabled, totalCount, setTotalResults, page, handleBackPage, handleNextPage, handleBackTenPages, handleNextTenPages } = usePage()
  const { data, loading, setSearch } = useApi(pathname, toSearch, setTotalResults, totalCount)

  const props = { handleBackPage, handleNextPage, handleBackTenPages, handleNextTenPages, isDisabled, page }

  return (
    <>
      <Wrapper>
        <ButtonPages props={props} totalCount={totalCount.total} loading={loading}/>
        <InputSearch setSearch={setSearch} />
      </Wrapper>
      <ListOfCards>
        <Card data={data} loading={loading} path={category} />
      </ListOfCards>
    </>
  )
}
