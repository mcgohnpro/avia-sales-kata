import { combineReducers } from 'redux'

import filterReducer from './filter-reducer'
import ticketsReducer from './tickets-reducer'
import commonStateAppReducer from './common-state-reducer'

const rootReducer = combineReducers({
  filter: filterReducer,
  tickets: ticketsReducer,
  commonState: commonStateAppReducer,
})

export default rootReducer
