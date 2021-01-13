import axios from 'axios';
import urls from './urls';

const baseURL = 'https://reqres.in/api';

const axiosInstance = axios.create({ baseURL });

const addParams = (url, params = {}) => (Object.keys(params).length
  ? `${url}?${Object.keys(params)
    .map((key) => `${key}=${params[key]}`)
    .join('&')}`
  : url);

const makeRequest = (method, url, ...params) => axiosInstance[method](`${url}`, ...params);

const request = (method, url) => (...params) => makeRequest(method, url, ...params);

export default {
  getUsers: (page) => request(
    'get',
    addParams(baseURL + urls.users, {
      page,
    }),
  )(),
};
