import { combineReducers } from 'redux'

import filterReducer from './filter-reducer'
import ticketsReducer from './tickets-reducer'

const rootReducer = combineReducers({
  filter: filterReducer,
  tickets: ticketsReducer,
})

export default rootReducer
