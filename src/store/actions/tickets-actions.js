/* eslint-disable import/prefer-default-export */

import getTickets from '../../api'

import { setLoading } from './common-state-actions'

export const loadTickets = () => {
  const action = (payload) => ({ type: 'LOAD_TICKETS', payload })
  return (dispatch) => {
    dispatch(setLoading(true))
    getTickets(dispatch, action)
  }
}
