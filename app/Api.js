import fetch from 'isomorphic-fetch';
import { ENDPOINT } from './constants/api';

export const fetchAllCategories = () => fetch(`${ENDPOINT}/categories.json`);
