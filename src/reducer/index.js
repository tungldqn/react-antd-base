import { combineReducers } from 'redux';
import general from '../modules/General/reducer';
import profile from '../modules/Profile/reducer';
import sidebar from '../components/Sidebar/reducer';
import user from '../modules/User/reducer';

export default combineReducers({
  general,
  profile,
  sidebar,
  user
})
