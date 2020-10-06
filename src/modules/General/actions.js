import { FETCH_GENERAL_CONFIG_DATA, GET_GENERAL_CONFIG_DATA } from "./constants"

export const fetchGeneralConfigData = () => ({
  type: FETCH_GENERAL_CONFIG_DATA
})

export const getGeneralConfigData = generalConfig => ({
  type: GET_GENERAL_CONFIG_DATA,
  payload: generalConfig
})
