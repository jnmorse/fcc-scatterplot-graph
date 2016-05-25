import { combineReducers } from 'redux'
import apiReducer from './api-reducer'

const rootReducer = combineReducers({
  api: apiReducer
})

export default rootReducer
