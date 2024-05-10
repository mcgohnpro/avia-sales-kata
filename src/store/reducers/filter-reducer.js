const initialState = {
  allTransfers: true,
  withoutTransfers: true,
  oneTransfer: true,
  twoTransfers: true,
  threeTransfers: true,
  cheapest: false,
  fastest: false,
}

// eslint-disable-next-line default-param-last
const filterReducer = (state = initialState, { type }) => {
  switch (type) {
    case 'ALL_TICKETS':
      return {
        ...state,
        allTransfers: !state.allTransfers,
        withoutTransfers: !state.allTransfers,
        oneTransfer: !state.allTransfers,
        twoTransfers: !state.allTransfers,
        threeTransfers: !state.threeTransfers,
      }

    case 'WITHOUT_TRANSFER':
      return {
        ...state,
        withoutTransfers: !state.withoutTransfers,
        allTransfers: !state.withoutTransfers && state.oneTransfer && state.twoTransfers && state.threeTransfers,
      }

    case 'ONE_TRANSFER':
      return {
        ...state,
        oneTransfer: !state.oneTransfer,
        allTransfers: state.withoutTransfers && !state.oneTransfer && state.twoTransfers && state.threeTransfers,
      }

    case 'TWO_TRANSFER':
      return {
        ...state,
        twoTransfers: !state.twoTransfers,
        allTransfers: state.withoutTransfers && state.oneTransfer && !state.twoTransfers && state.threeTransfers,
      }

    case 'THREE_TRANSFER':
      return {
        ...state,
        threeTransfers: !state.threeTransfers,
        allTransfers: state.withoutTransfers && state.oneTransfer && state.twoTransfers && !state.threeTransfers,
      }

    case 'CHEAPEST':
      return { ...state, cheapest: true, fastest: false }

    case 'FASTEST':
      return { ...state, cheapest: false, fastest: true }

    default:
      return state
  }
}

export default filterReducer
