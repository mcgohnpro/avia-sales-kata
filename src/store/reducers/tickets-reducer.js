// eslint-disable-next-line default-param-last
const ticketsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case 'LOAD_TICKETS':
      return [...state, ...payload]

    default:
      return state
  }
}

export default ticketsReducer
