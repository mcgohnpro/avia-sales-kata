/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'

const URL_API = 'https://aviasales-test-api.kata.academy'

const useFetch = (url, options) => {
  const [searchID, setSearchID] = useState()
  const [status, setStatus] = useState({
    loading: false,
    data: undefined,
    error: undefined,
  })

  function fetchNow(urlFetch, optionsFetch) {
    setStatus({ loading: true })
    fetch(urlFetch, optionsFetch)
      .then((res) => res.json())
      .then((json) => {
        setStatus({ loading: false, data: json })
      })
      .catch((error) => {
        setStatus({ loading: false, error })
      })
  }

  useEffect(() => {
    if (url) {
      fetchNow(url, options)
    }
  }, [])

  return { ...status, fetchNow }
}

export default useFetch
