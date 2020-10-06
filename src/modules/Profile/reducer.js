import { combineReducers } from 'redux';
import { CHANGE_PROFILE_FORM_IS_OPEN, GET_PROFILES, initProfileForm } from './constants';

function list(state = [], action) {
  switch(action.type) {
    case GET_PROFILES:
      return action.payload;
    default:
      return state;
  }
}

function formIsOpen(state = false, action) {
  switch(action.type) {
    case CHANGE_PROFILE_FORM_IS_OPEN:
      return action.payload.isOpen;
    default:
      return state;
  }
}

function selectedForm(state = initProfileForm, action) {
  switch(action.type) {
    case CHANGE_PROFILE_FORM_IS_OPEN:
      return action.payload.selected;
    default:
      return state;
  }
}

export default combineReducers({
  list,
  formIsOpen,
  selectedForm
})
