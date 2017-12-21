export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST'
export const fetchDataRequest = () => ({
  type: FETCH_DATA_REQUEST
})

export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS'
export const fetchDataSuccess = data => ({
  type: FETCH_DATA_SUCCESS,
  payload: { data }
})

export const POST_DATA_SUCCESS = 'POST_DATA_SUCCESS'
export const postDataSuccess = data => ({
  type: POST_DATA_SUCCESS,
  payload: { data }
})

//TODO: handle errors

export const SAVE_AMOUNT_INTERVAL = 'SAVE_AMOUNT_INTERVAL'
export const saveAmountInterval = val => ({
  type: SAVE_AMOUNT_INTERVAL,
  payload: { amountInterval: val }
})

export const SAVE_TERM_INTERVAL = 'SAVE_TERM_INTERVAL'
export const saveTermInterval = val => ({
  type: SAVE_TERM_INTERVAL,
  payload: { termInterval: val }
})
