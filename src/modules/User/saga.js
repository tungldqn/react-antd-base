import { notification } from 'antd';
import { get } from 'lodash';
import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import mainAxios from '../../axios/main';
import { FETCH_USER_FEATURE_LIST } from './constants';
import { checkIsAuth } from '../../utils/auth';
import { getUserFeatureList } from './actions';

function* fetchUserFeatures() {
  const userFeatureListIsFetched = yield select(state => state.user.featureListIsFetched);
  if(checkIsAuth() && !userFeatureListIsFetched) {
    try {
      const { data } = yield call(mainAxios.getRequest, 'user-feature');
      yield put(getUserFeatureList(data));
    } catch(err) {
      notification.error({
        message: get(err, 'response.data.message', 'Load user feature failed')
      })
    }
  }
}

function* watchFetchProfiles() {
  yield takeLatest(FETCH_USER_FEATURE_LIST, fetchUserFeatures);
}

export default function*()  {
  yield all([
    fetchUserFeatures(),
    watchFetchProfiles()
  ])
}
