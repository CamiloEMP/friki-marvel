import { ButtonPages } from '../../components/ButtonPages'
import { Card } from '../../components/CardsPages'
import { InputSearch } from '../../components/InputSearch'

import { ListOfCards } from '../../container/ListOfCards'
import { useApi } from '../../hooks/useApi'
import { usePage } from '../../hooks/usePage'

export const Comics = () => {
  const { isDisabled, totalCount, setTotalResults, page, handleBackPage, handleNextPage, handleBackTenPages, handleNextTenPages } = usePage()
  const { data, loading, setSearch } = useApi('comics', 'titleStartsWith', setTotalResults, totalCount)

  const props = { handleBackPage, handleNextPage, handleBackTenPages, handleNextTenPages, isDisabled, page }

  return (
    <>
      <ButtonPages props={props} />
      <InputSearch setSearch={setSearch} />
      <ListOfCards>
        <Card data={data} path='comics' loading={loading} />
      </ListOfCards>
    </>
  )
}
