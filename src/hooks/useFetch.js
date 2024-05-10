import { useState, useEffect, useRef } from 'react'

import getId from '../utils/getId'
import { URL_API, API_ENDPOINT_SEARCH_ID, API_ENDPOINT_SEARCH_TICKETS } from '../constants/apiConstants'
import SearchIdError from '../errors/getSearchIdError'
import FetchError from '../errors/fetchError'

const url = new URL(URL_API)

const initialState = {
  tickets: [],
  stop: false,
}
const useFetch = () => {
  const searchID = useRef()
  const [data, setData] = useState(initialState)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()

  function getSearchIdFromAPI() {
    if (!searchID.current) {
      url.pathname = API_ENDPOINT_SEARCH_ID
      return fetch(url)
        .then((response) => {
          if (response.ok) {
            return response.json()
          }
          throw new SearchIdError('Error to get searchID', response)
        })
        .then((json) => {
          searchID.current = json.searchId
          return json.searchId
        })
        .catch((err) => {
          setError(err)
        })
        .finally(() => {
          url.pathname = ''
        })
    }
    return new Promise((resolve) => {
      resolve(searchID.current)
    })
  }

  function fetchNow() {
    setLoading(true)
    getSearchIdFromAPI().then((id) => {
      if (!id) {
        return
      }
      url.pathname = API_ENDPOINT_SEARCH_TICKETS
      url.searchParams.set('searchId', id)
      fetch(url)
        .then((response) => {
          if (response.ok) {
            return response.json()
          }
          throw new FetchError('Error to fetch data', response)
        })
        .then((json) => {
          setData({
            tickets: json.tickets.map((item) => {
              return { ...item, key: getId() }
            }),
            stop: json.stop,
          })

          if (!json.stop) {
            fetchNow()
          } else {
            setLoading(false)
          }
        })
        .catch((err) => {
          if (err.response.status === 500) {
            fetchNow()
          } else {
            setError(err)
          }
        })
        .finally(() => {
          if (data.stop) {
            setLoading(false)
          }
        })
    })
  }

  useEffect(() => {
    fetchNow()
  }, [])

  return { data, loading, error }
}

export default useFetch
