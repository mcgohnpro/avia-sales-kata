/* eslint-disable default-param-last */
const ticketsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case 'ADD_TICKETS':
      return [...state, ...payload]
    default:
      return state
  }
}

export default ticketsReducer
