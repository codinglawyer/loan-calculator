import watchFetchData from './fetchData'

export default function* rootSaga() {
  yield [watchFetchData()]
}

