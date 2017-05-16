import axios from 'axios';
import ENDPOINT from './constants/api';

export const fetchAllCategories = () => axios.get(`${ENDPOINT}/categories.json`);
export const fetchAllProducts = () => axios.get(`${ENDPOINT}/products.json`);
export const createProduct = (product) => {
  // const { name, price, image} = product;
  // console.log(product);
  // const data = new FormData();
  // data.append('name', name);
  // data.append('price', price);
  // data.append('image', {
  //   uri: image.uri,
  //   type: image.type,
  //   name: image.name
  // });
  // console.log(data);
  // data.append({})
  return axios.post(`${ENDPOINT}/products.json`, product);
}
