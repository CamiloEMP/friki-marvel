import { useEffect, useState } from 'react'

export const useApi = (API, params) => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  useEffect(() => {
    fetch(API)
      .then(res => res.json())
      .then(data => {
        setLoading(false)
        setData(data.data.results)
      })
      .catch(err => console.log(err))
  }, [params])
  return { loading, data }
}
