/* eslint-disable default-param-last */
const initialState = {
  allTransfers: true,
  withoutTrasnfers: true,
  oneTransfer: true,
  twoTransfers: true,
  cheapest: false,
  fastest: false,
  optimal: false,
}

const filterReducer = (state = initialState, { type }) => {
  switch (type) {
    case 'ALL_TICKETS':
      return {
        ...state,
        allTransfers: !state.allTransfers,
        withoutTrasnfers: !state.allTransfers,
        oneTransfer: !state.allTransfers,
        twoTransfers: !state.allTransfers,
      }

    case 'WITHOUT_TRANSFER':
      return {
        ...state,
        withoutTrasnfers: !state.withoutTrasnfers,
        allTransfers: state.oneTransfer && state.twoTransfers && !state.withoutTrasnfers,
      }

    case 'ONE_TRANSFER':
      return {
        ...state,
        oneTransfer: !state.oneTransfer,
        allTransfers: state.withoutTrasnfers && state.twoTransfers && !state.oneTransfer,
      }

    case 'TWO_TRANSFER':
      return {
        ...state,
        twoTransfers: !state.twoTransfers,
        allTransfers: state.withoutTrasnfers && state.oneTransfer && !state.twoTransfers,
      }

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
