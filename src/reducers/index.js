import { combineReducers } from 'redux'
import { FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS } from '../actions/index'

export const sliderConfig = (state = [], action) => {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      const { data } = action.payload
      return data
    default:
      return state
  }
}

const rootReducer = combineReducers({
  sliderConfig
})

export default rootReducer
