import { combineReducers } from 'redux'
import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  SAVE_AMOUNT_INTERVAL,
  SAVE_TERM_INTERVAL
} from '../actions/index'

export const sliderConfig = (state = {}, action) => {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      const { data } = action.payload
      return data
    default:
      return state
  }
}

export const amountInterval = (state = 0, action) => {
  switch (action.type) {
    case SAVE_AMOUNT_INTERVAL:
      const { interval } = action.payload
      return interval
    default:
      return state
  }
}

export const termInterval = (state = 0, action) => {
  switch (action.type) {
    case SAVE_TERM_INTERVAL:
      const { interval } = action.payload
      return interval
    default:
      return state
  }
}

const rootReducer = combineReducers({
  sliderConfig,
  amountInterval,
  termInterval
})

export default rootReducer
