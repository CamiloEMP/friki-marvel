import { useEffect, useState } from 'react'
import { API } from '../api/config'

export const useApi = (category, endpoint, setTotalResults, totalCount) => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  const [search, setSearch] = useState('')
  const toSearch = search !== '' ? `${endpoint}=${search}&` : ''

  useEffect(() => {
    setLoading(true)
    fetch(
      `${API.BASE_URL}${category}?${toSearch}offset=${totalCount.offset}&limit=${totalCount.limit}&${API.CREDENTIALS}`
    )
      .then(res => res.json())
      .then(data => {
        setLoading(false)
        setTotalResults(data.data.total)
        setData(data.data.results)
      })
      .catch(err => {
        console.log(err)
      })
  }, [category, search, totalCount.offset])
  return { loading, data, setSearch }
}
