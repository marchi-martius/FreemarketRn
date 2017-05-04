import axios from 'axios';
import ENDPOINT from './constants/api';

const fetchAllCategories = () => axios.get(`${ENDPOINT}/categories.json`);

export default fetchAllCategories;
