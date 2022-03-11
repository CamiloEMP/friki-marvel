import { useState } from 'react'

export const usePage = () => {
  const initialValues = { offset: 0, total: 0, limit: 40 }
  const [page, setPage] = useState(1)
  const [totalCount, setTotalCount] = useState(initialValues)

  const isDisabled = {
    back: totalCount.offset === 0,
    backTen: totalCount.offset === 0 || !(totalCount.offset - 400 >= 0),
    next: !(totalCount.offset < totalCount.total - 40),
    nextTen: totalCount.total < 1000 || totalCount.offset + 400 > totalCount.total
  }

  function setTotalResults (totalResults) {
    setTotalCount({ ...totalCount, total: totalResults })
  }

  function handleBackPage () {
    setTotalCount({ ...totalCount, offset: totalCount.offset - 40 })
    setPage(page - 1)
  }

  function handleNextPage () {
    setTotalCount({ ...totalCount, offset: totalCount.offset + 40 })
    setPage(page + 1)
  }

  function handleBackTenPages () {
    setTotalCount({ ...totalCount, offset: totalCount.offset - 400 })
    setPage(page - 10)
  }

  function handleNextTenPages () {
    setTotalCount({ ...totalCount, offset: totalCount.offset + 400 })
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
