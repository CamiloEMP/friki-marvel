import { useState } from 'react'

export const usePage = () => {
  const initialValues = { offset: 0, total: 0, limit: 100 }
  const [page, setPage] = useState(1)
  const [totalCount, setTotalCount] = useState(initialValues)

  const isDisabled = {
    back: totalCount.offset === 0,
    backTen: totalCount.offset === 0 || !(totalCount.offset - 1000 >= 0),
    next: !(totalCount.offset < totalCount.total - 100),
    nextTen: totalCount.total < 1000 || totalCount.offset + 1000 > totalCount.total
  }

  function setTotalResults (totalResults) {
    console.log(totalResults)
    setTotalCount({ ...totalCount, total: totalResults })
  }

  function handleBackPage () {
    setTotalCount({ ...totalCount, offset: totalCount.offset - 100 })
    setPage(page - 1)
  }

  function handleNextPage () {
    setTotalCount({ ...totalCount, offset: totalCount.offset + 100 })
    setPage(page + 1)
  }

  function handleBackTenPages () {
    setTotalCount({ ...totalCount, offset: totalCount.offset - 1000 })
    setPage(page - 10)
  }

  function handleNextTenPages () {
    setTotalCount({ ...totalCount, offset: totalCount.offset + 1000 })
    setPage(page + 10)
  }

  return {
    totalCount,
    page,
    isDisabled,
    setTotalResults,
    handleBackPage,
    handleNextPage,
    handleBackTenPages,
    handleNextTenPages
  }
}
