export function setCookie(name, value) {
  document.cookie = `${name}=${value}; path=/`;
}

export function getCookie(name) {
  const value = '; ' + document.cookie;
  const parts = value.split('; ' + name + '=');
  if (parts.length === 2) return parts.pop().split(';').shift();
}

export function deleteCookie(name) {
  document.cookie = name +`=; Expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/`;
}
