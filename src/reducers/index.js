import { combineReducers } from 'redux'
import {
  FETCH_DATA_REQUEST,
} from '../actions/index'

export const data = (state = [], action) => {
  return state
}

const rootReducer = combineReducers({
  data
})

export default rootReducer
