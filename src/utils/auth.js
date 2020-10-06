import { getCookie } from "./cookie";

export function checkIsAuth() {
  const authToken = getCookie('auth_token');
  if(authToken) {
    return true;
  } else {
    return false;
  }
}
