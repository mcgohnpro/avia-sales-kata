import { useState, useEffect, useRef } from 'react'

import getId from '../utils/getId'
import {
  URL_API,
  API_ENDPOINT_SEARCH_ID,
  API_ENDPOINT_SEARCH_TICKETS,
  RETRY_FETCH_COUNT,
  DELAY_RETRY_FETCH,
} from '../constants/apiConstants'
import SearchIdError from '../errors/getSearchIdError'
import FetchError from '../errors/fetchError'

const url = new URL(URL_API)

const initialState = {
  data: {
    tickets: [],
    stop: false,
  },
  error: undefined,
}
// TODO либо вынести error или loading вернуть обратно
const useFetch = () => {
  const retryFetchCount = useRef(RETRY_FETCH_COUNT)
  const searchID = useRef()
  const [status, setStatus] = useState(initialState)
  const [loading, setLoading] = useState(false)

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
          setStatus((prevState) => {
            return { ...prevState, error: err }
          })
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
          retryFetchCount.current = RETRY_FETCH_COUNT
          setStatus((prevState) => {
            return {
              ...prevState,
              data: {
                tickets: json.tickets.map((item) => {
                  return { ...item, key: getId() }
                }),
                stop: json.stop,
              },
            }
          })

          if (!json.stop) {
            setTimeout(() => {
              fetchNow()
            }, 200)
          } else {
            setLoading(false)
          }
        })
        .catch((err) => {
          retryFetchCount.current -= 1
          if (retryFetchCount.current > 0) {
            setTimeout(() => {
              fetchNow()
            }, DELAY_RETRY_FETCH)
          } else {
            setLoading(false)
            setStatus((prevState) => {
              return { ...prevState, error: err }
            })
          }
        })
        .finally(() => {
          if (status.data.stop) {
            setLoading(false)
          }
        })
    })
  }

  useEffect(() => {
    fetchNow()
  }, [])

  return { ...status, loading, fetchNow }
}

export default useFetch