/* eslint-disable default-param-last */
const initialState = {
  all: false,
  without: false,
  one: false,
  two: false,
  cheapest: false,
  fastest: false,
  optimal: false,
}

const filterReducer = (state = initialState, { type }) => {
  switch (type) {
    case 'ALL_TICKETS':
      return { ...state, all: !state.all, without: !state.all, one: !state.all, two: !state.all }

    case 'WITHOUT_TRANSFER':
      return { ...state, without: !state.without, all: state.one && state.two && !state.without }

    case 'ONE_TRANSFER':
      return { ...state, one: !state.one, all: state.without && state.two && !state.one }

    case 'TWO_TRANSFER':
      return { ...state, two: !state.two, all: state.without && state.one && !state.two }

    case 'CHEAPEST':
      return { ...state, cheapest: true, fastest: false, optimal: false }

    case 'FASTEST':
      return { ...state, cheapest: false, fastest: true, optimal: false }

    case 'OPTIMAL':
      return { ...state, cheapest: false, fastest: false, optimal: true }

    default:
      return state
  }
}

export default filterReducer
