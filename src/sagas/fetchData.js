import { takeEvery, put } from 'redux-saga/effects'
import axios from 'axios'
import { FETCH_DATA_REQUEST, fetchDataSuccess} from '../actions'

export function* fetchData() {
  try {
    const response = yield axios.get('https://js-developer-second-round.herokuapp.com/api/v1/application/constraints')
    console.log("RESPONSE", response)
    yield put(fetchDataSuccess(response.data))
  } catch (error) {
    console.log("ERROR", error)
  }
}

export default function* watchFetchData() {
  yield takeEvery(FETCH_DATA_REQUEST, fetchData)
}
