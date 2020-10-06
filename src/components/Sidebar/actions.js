import { CHANGE_SIDEBAR_IS_OPEN } from "./constants";

export const changeSidebarIsOpen = (isOpen) => ({
  type: CHANGE_SIDEBAR_IS_OPEN,
  payload: isOpen
})
