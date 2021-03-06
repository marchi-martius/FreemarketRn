import axios from 'axios';
import ENDPOINT from './constants/api';

export const fetchAllCategories = () => axios.get(`${ENDPOINT}/categories.json`);
export const fetchAllProducts = () => axios.get(`${ENDPOINT}/products.json`);
