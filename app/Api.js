// import fetch from 'isomorphic-fetch';
import ENDPOINT from './constants/api';
import axios from 'axios';

const fetchAllCategories = () => axios.get(`${ENDPOINT}/categories.json`);

export default fetchAllCategories;
