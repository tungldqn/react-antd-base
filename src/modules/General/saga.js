import { notification } from 'antd';
import { get } from 'lodash';
import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import mainAxios from '../../axios/main';
import { FETCH_GENERAL_CONFIG_DATA } from './constants';
import { checkIsAuth } from '../../utils/auth';
import { getGeneralConfigData } from './actions';

function* fetchGeneralConfigData() {
  const generalConfigDataIsFetched = yield select(state => state.general.configDataIsFetched);
  if(checkIsAuth() && !generalConfigDataIsFetched) {
    try {
      const { data } = yield call(mainAxios.getRequest, 'system-config/general');
      yield put(getGeneralConfigData(data));
    } catch(err) {
      notification.error({
        message: get(err, 'response.data.message', 'Load general config data failed')
      })
    }
  }
}

function* watchFetchGeneralConfigData() {
  yield takeLatest(FETCH_GENERAL_CONFIG_DATA, fetchGeneralConfigData);
}

export default function*()  {
  yield all([
    fetchGeneralConfigData(),
    watchFetchGeneralConfigData()
  ])
}
