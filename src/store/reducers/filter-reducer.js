const initialState = {
  allTransfers: true,
  withoutTransfers: true,
  oneTransfer: true,
  twoTransfers: true,
  cheapest: false,
  fastest: false,
  displayModalTransfers: false,
}

// eslint-disable-next-line default-param-last
const filterReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'ALL_TICKETS':
      return {
        ...state,
        allTransfers: !state.allTransfers,
        withoutTransfers: !state.allTransfers,
        oneTransfer: !state.allTransfers,
        twoTransfers: !state.allTransfers,
      }

    case 'WITHOUT_TRANSFER':
      return {
        ...state,
        withoutTransfers: !state.withoutTransfers,
        allTransfers: state.oneTransfer && state.twoTransfers && !state.withoutTransfers,
      }

    case 'ONE_TRANSFER':
      return {
        ...state,
        oneTransfer: !state.oneTransfer,
        allTransfers: state.withoutTransfers && state.twoTransfers && !state.oneTransfer,
      }

    case 'TWO_TRANSFER':
      return {
        ...state,
        twoTransfers: !state.twoTransfers,
        allTransfers: state.withoutTransfers && state.oneTransfer && !state.twoTransfers,
      }

    case 'CHEAPEST':
      return { ...state, cheapest: true, fastest: false }

    case 'FASTEST':
      return { ...state, cheapest: false, fastest: true }

    case 'DISPLAY_MODAL':
      return { ...state, displayModalTransfers: payload }

    default:
      return state
  }
}

export default filterReducer
