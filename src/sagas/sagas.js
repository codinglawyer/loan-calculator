import watchFetchData from './fetchData'
import watchPostData from './postData'

export default function* rootSaga() {
  yield [watchFetchData(), watchPostData()]
}
