import { FETCH_USER_FEATURE_LIST, GET_USER_FEATURE_LIST } from "./constants"

export const fetchUserFeatureList = () => ({
  type: FETCH_USER_FEATURE_LIST
})

export const getUserFeatureList = featureList => ({
  type: GET_USER_FEATURE_LIST,
  payload: featureList
})
