import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { API } from '../api/config'

export const useApi = (category, endpoint = 'titleStartsWith') => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  const [search, setSearch] = useState('')
  const toSearch = search !== '' ? `${endpoint}=${search}&` : ''

  useEffect(() => {
    setLoading(true)
    fetch(
      `${API.BASE_URL}/${category}?${toSearch}offset=0&limit=40&${API.CREDENTIALS}`
    )
      .then(res => res.json())
      .then(data => {
        setLoading(false)
        setData(data.data.results)
      })
      .catch(err => {
        const navigate = useNavigate()
        console.log(err)
        navigate('/NotFound')
      })
  }, [category, search])
  return { loading, data, setSearch }
}
