import { API } from '../api/config'

export const getCategoryID = (category, id) => {
  return fetch(`${API.BASE_URL}/${category}/${id}?${API.CREDENTIALS}`)
    .then(res => res.json())
    .then(data => data.data.results[0])
}
