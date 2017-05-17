import { put, call, takeLatest } from 'redux-saga/effects';
import { Actions } from 'react-native-router-flux';

import {
  requestProducts,
  productsSuccess,
  productsError,

  requestCreateProduct,
  createProductSuccess,
  createProductError,
} from '../reducers/products';
import * as Api from '../Api';
import * as FirebaseApi from '../FirebaseApi';

export function* fetchProducts() {
  try {
    const { data } = yield call(Api.fetchAllProducts);
    const products = Object.keys(data)
      .map(id => ({ ...data[id], id }))
      .reverse(); // new records first
    yield put(productsSuccess(products));
  } catch (e) {
    console.log(e);
    yield put(productsError(e));
  }
}

export function* watchProductsRequest() {
  yield takeLatest(requestProducts.getType(), fetchProducts);
}

export function* createProduct({ payload }) {
  try {
    const { localImage, product } = payload;
    const image = yield call(FirebaseApi.saveImageToStorage, localImage);
    yield call(Api.createProduct, { ...product, image });
    yield put(createProductSuccess());
    yield call(Actions.ProductIndex);
  } catch (e) {
    console.log(e);
    yield put(createProductError(e));
  }
}

export function* watchCreateProductRequest() {
  yield takeLatest(requestCreateProduct.getType(), createProduct);
}
