import { put, call, takeLatest } from 'redux-saga/effects';
import { Actions } from 'react-native-router-flux';

import {
  requestProducts,
  productsSuccess,
  productsError,

  requestCreateProduct,
  createProductSuccess,
  createProductError
} from '../reducers/products';
import * as Api from '../Api';

export function* fetchProducts() {
  // try {
    const { data } = yield call(Api.fetchAllProducts);
    const products = Object.keys(data).map((k) => data[k]).reverse();
    yield put(productsSuccess(products));
  // } catch (e) {
  //   yield put(productsError(e));
  // }
}

export function* watchProductsRequest() {
  yield takeLatest(requestProducts.getType(), fetchProducts);
}

export function* createProduct({payload}) {
  // try {
    yield call(Api.createProduct, payload);
    yield put(createProductSuccess());
    yield call(Actions.ProductIndex);
  // } catch (e) {
  //   yield put(createProductError(e));
  // }
}

export function* watchCreateProductRequest() {
  yield takeLatest(requestCreateProduct.getType(), createProduct);
}
