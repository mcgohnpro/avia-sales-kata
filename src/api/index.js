import FetchError from '../errors/fetchError'
import { URL_API, API_ENDPOINT_SEARCH_ID, API_ENDPOINT_SEARCH_TICKETS } from '../constants/apiConstants'
import { setLoading, setError } from '../store/actions/common-state-actions'

const url = new URL(URL_API)

function getSearchId() {
  let searchId
  return new Promise((resolve, reject) => {
    if (searchId) {
      resolve(searchId)
    }
    url.pathname = API_ENDPOINT_SEARCH_ID
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json()
        }
        throw new Error('Error get search id from API')
      })
      .then((json) => {
        searchId = json.searchId
        resolve(searchId)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

const searchID = getSearchId()

const getTickets = (dispatch, loadTicketAction) => {
  searchID
    .then((searchId) => {
      url.pathname = API_ENDPOINT_SEARCH_TICKETS
      url.searchParams.set('searchId', searchId)
      fetch(url)
        .then((response) => {
          if (response.ok) {
            return response.json()
          }
          throw new FetchError(`Error to fetch data, status: ${response.status}`, response)
        })
        .then((json) => {
          dispatch(loadTicketAction(json.tickets))
          if (!json.stop) {
            getTickets(dispatch, loadTicketAction)
          } else {
            dispatch(setLoading(false))
          }
        })
        .catch((error) => {
          if (error.response?.status === 500) {
            getTickets(dispatch, loadTicketAction)
          } else {
            dispatch(setError(error))
            dispatch(setLoading(false))
          }
        })
    })
    .catch((error) => {
      dispatch(setError(error))
      dispatch(setLoading(false))
    })
}

export default getTickets
