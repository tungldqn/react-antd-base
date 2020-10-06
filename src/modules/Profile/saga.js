import { notification } from 'antd';
import { get } from 'lodash';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import mainAxios from '../../axios/main';
import { getProfiles } from './actions';
import { DELETE_PROFILE, FETCH_PROFILES } from './constants';

function* fetchProfiles() {
  try {
    const { data } = yield call(mainAxios.getRequest, 'profiles');
    yield put(getProfiles(data));
  } catch(err) {
    notification.error({
      message: get(err, 'response.data.message', 'Load profiles failed')
    })
  }
}

function* deleteProfile(action) {
  const profileId = action.payload
  try {
    yield call(mainAxios.deleteRequest, `profiles/${profileId}`);
    yield fetchProfiles();
  } catch(err) {
    notification.error({
      message: get(err, 'response.data.message', 'Load profiles failed')
    })
  }
}

function* watchFetchProfiles() {
  yield takeLatest(FETCH_PROFILES, fetchProfiles);
}

function* watchDeleteProfile() {
  yield takeLatest(DELETE_PROFILE, deleteProfile);
}

export default function*()  {
  yield all([
    watchFetchProfiles(),
    watchDeleteProfile()
  ])
}
