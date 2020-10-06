import { combineReducers } from 'redux';
import { CHANGE_SIDEBAR_IS_OPEN } from './constants';

function isOpen(state = false, action) {
  switch(action.type) {
    case CHANGE_SIDEBAR_IS_OPEN:
      return action.payload;
    default:
      return state;
  }
}

export default combineReducers({
  isOpen
})
