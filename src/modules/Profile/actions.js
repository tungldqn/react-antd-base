import { CHANGE_PROFILE_FORM_IS_OPEN, DELETE_PROFILE, FETCH_PROFILES, GET_PROFILES } from "./constants";

export const fetchProfiles = () => ({
  type: FETCH_PROFILES
})

export const getProfiles = (profiles) => ({
  type: GET_PROFILES,
  payload: profiles
})

export const deleteProfile = profileId => ({
  type: DELETE_PROFILE,
  payload: profileId
})

export const changeProfileFormIsOpen = (isOpen, selected) => ({
  type: CHANGE_PROFILE_FORM_IS_OPEN,
  payload: { 
    isOpen,
    selected
  }
})
