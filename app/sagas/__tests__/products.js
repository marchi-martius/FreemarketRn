import { call, put } from 'redux-saga/effects';

import { fetchProducts, createProduct } from '../products';
import {
  productsSuccess,
  productsError,

  createProductSuccess,
  createProductError,
} from '../../reducers/products';
import { fetchAllProducts, createNewProduct } from '../../api/rest';
import { saveImageToStorage } from '../../api/firebase';

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

describe('createProduct', () => {
  it('calls success action on resolve', () => {
    const product = {};
    const payload = { localImage: true, product };
    const image = 'image src';

    const gen = createProduct({ payload });

    expect(gen.next().value).toEqual(call(saveImageToStorage, payload.localImage));
    expect(gen.next(image).value).toEqual(call(createNewProduct, { ...product, image }));
    expect(gen.next().value).toEqual(put(createProductSuccess()));
  });

  it('calls error on failure', () => {
    const product = {};
    const payload = { localImage: true, product };

    const gen = createProduct({ payload });
    const error = {};

    expect(gen.next().value).toEqual(call(saveImageToStorage, payload.localImage));
    expect(gen.throw(error).value).toEqual(put(createProductError(error)));
  });
});
