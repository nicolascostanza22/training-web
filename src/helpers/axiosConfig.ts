
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://private-8d10c-nicolascostanza22.apiary-mock.com',
});

export default instance;