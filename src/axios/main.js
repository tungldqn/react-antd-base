import axios from 'axios';
import { get } from 'lodash';
import { deleteCookie, getCookie } from '../utils/cookie';

const instance = axios.create({
  baseURL: process.env.REACT_APP_CONSOLE_API_URL
})

instance.interceptors.request.use(function (config) {
  if(getCookie('auth_token')) {
    config.headers = {
      Authorization: `Bearer ${getCookie('auth_token')}`,
      ...config.headers
    }
  }
  return config;
}, function (error) {
  return Promise.reject(error);
});

instance.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  if(get(error, 'response.status') === 401) {
    deleteCookie('auth_token');
    localStorage.clear();
    window.location.href = '/auth/sign-in';
  }
  return Promise.reject(error);
});

const getRequest = (endPoint, params, config) => instance.get(endPoint, { params, ...config });

const postRequest = (endPoint, body, config) => instance.post(endPoint, body, config);

const deleteRequest = (endPoint, body, config) => instance.delete(endPoint, body, config);

export default ({
  getRequest,
  postRequest,
  deleteRequest
})
