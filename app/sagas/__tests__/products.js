import { call, put } from 'redux-saga/effects';

import { fetchProducts } from '../products';
import { productsSuccess, productsError } from '../../reducers/products';
import { fetchAllProducts } from '../../Api';

describe('fetchProducts', () => {
  it('calls success action on resolve', () => {
    const gen = fetchProducts();
    const products = [];
    const response = { data: products };

    expect(gen.next().value).toEqual(call(fetchAllProducts));
    expect(gen.next(response).value).toEqual(put(productsSuccess(products)));
  });

  it('calls error on failure', () => {
    const gen = fetchProducts();
    const error = {};

    expect(gen.next().value).toEqual(call(fetchAllProducts));
    expect(gen.throw(error).value).toEqual(put(productsError(error)));
  });
});
