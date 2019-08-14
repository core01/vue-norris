import axios from 'axios';

const API_URL = 'https://api.chucknorris.io';

export const clientApi = (method, url, params = {}) => {
  try {
    return axios[method](`${API_URL}/${url}`, params);
  } catch (error) {
    throw new Error(error);
  }
};
