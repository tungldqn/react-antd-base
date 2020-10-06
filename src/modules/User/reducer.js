import { combineReducers } from 'redux';
import { GET_USER_FEATURE_LIST } from './constants';

function featureList(state = [], action) {
  switch(action.type) {
    case GET_USER_FEATURE_LIST:
      return action.payload;
    default:
      return state;
  }
}

function featureListIsFetched(state = false, action) {
  switch(action.type) {
    case GET_USER_FEATURE_LIST:
      return true;
    default:
      return state;
  }
}

export default combineReducers({
  featureList,
  featureListIsFetched
})
