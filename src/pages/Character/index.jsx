import { Card } from '../../components/CardsPages'
import { InputSearch } from '../../components/InputSearch'
import { ButtonPages } from '../../components/ButtonPages'

import { ListOfCards } from '../../container/ListOfCards'
import { useApi } from '../../hooks/useApi'
import { usePage } from '../../hooks/usePage'

export const Character = () => {
  const { isDisabled, totalCount, setTotalResults, page, handleBackPage, handleNextPage, handleBackTenPages, handleNextTenPages } = usePage()
  const { data, loading, setSearch } = useApi('characters', 'nameStartsWith', setTotalResults, totalCount)

  const props = { handleBackPage, handleNextPage, handleBackTenPages, handleNextTenPages, isDisabled, page }

  return (
    <>
      <ButtonPages props={props}/>
      <InputSearch setSearch={setSearch} />
      <ListOfCards>
        <Card data={data} path='characters' loading={loading} />
      </ListOfCards>
    </>
  )
}
