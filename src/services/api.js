import axios from 'axios';
import router from '../router'
import config from '../../config/prod.env'

const API = axios.create(
  {
    baseURL: config.API_URL
  }
);

if (localStorage.getItem('access_token')) {
  axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem('access_token');
}

API.interceptors.response.use(
  response => {
    return response;
  }, reject => {
    if (reject.response) {
      switch (reject.response.status) {
        case 401:
          router.push({name: 'login-page'});
          break;
        case 403:
          break;
        case 404:
          break;
      }
      return Promise.reject(reject);
    }
    return Promise.reject(reject);
  }
);

export default API;
