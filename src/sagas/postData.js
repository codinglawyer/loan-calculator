import axios from 'axios'
import { get as g } from 'lodash'
import { takeEvery, put, select } from 'redux-saga/effects'
import {
  SAVE_AMOUNT_INTERVAL,
  SAVE_TERM_INTERVAL,
  postDataSuccess
} from '../actions'

export function* postData() {
  const intervals = yield select(state => ({
    amount: state.amountInterval,
    term: state.termInterval
  }))
  try {
    const response = yield axios.get(
      'https://js-developer-second-round.herokuapp.com/api/v1/application/real-first-loan-offer',
      {
        params: {
          amount: g(intervals, 'amount'),
          term: g(intervals, 'term')
        }
      }
    )
    yield put(postDataSuccess(g(response, 'data')))
  } catch (error) {
    console.log('ERROR', error)
  }
}

export default function* watchPostData() {
  yield takeEvery([SAVE_AMOUNT_INTERVAL, SAVE_TERM_INTERVAL], postData)
}
