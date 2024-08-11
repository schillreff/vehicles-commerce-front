import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://vehicles-commerce-api.vercel.app/',
  timeout: 10000,
});
