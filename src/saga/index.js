import { all } from 'redux-saga/effects';
import general from '../modules/General/saga';
import profile from '../modules/Profile/saga';
import user from '../modules/User/saga';

export default function*() {
  yield all([
    general(),
    profile(),
    user()
  ])
}
