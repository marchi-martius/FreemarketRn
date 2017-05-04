import fetch from 'isomorphic-fetch';
import ENDPOINT from './constants/api';

const fetchAllCategories = () => fetch(`${ENDPOINT}/categories.json`);

export default fetchAllCategories;
