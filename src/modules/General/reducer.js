import { combineReducers } from 'redux';
import { GET_GENERAL_CONFIG_DATA } from './constants';

function configData(state = {}, action) {
  switch(action.type) {
    case GET_GENERAL_CONFIG_DATA:
      return action.payload;
    default:
      return state;
  }
}

function configDataIsFetched(state = false, action) {
  switch(action.type) {
    case GET_GENERAL_CONFIG_DATA:
      return true;
    default:
      return state;
  }
}

export default combineReducers({
  configData,
  configDataIsFetched
})
