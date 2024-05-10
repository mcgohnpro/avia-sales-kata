import { getId } from '../../utils/idGenerators'

const initialState = {
  loading: false,
  displayModalTransfers: false,
  errors: [],
}

// eslint-disable-next-line default-param-last
const commonStateAppReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_LOADING':
      return { ...state, loading: payload }

    case 'DISPLAY_MODAL':
      return { ...state, displayModalTransfers: payload }

    case 'SET_ERROR':
      return { ...state, errors: [...state.errors, { id: getId(), title: payload.name, message: payload.message }] }

    default:
      return state
  }
}

export default commonStateAppReducer
