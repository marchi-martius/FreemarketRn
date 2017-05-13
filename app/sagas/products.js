import { put, call, takeLatest } from 'redux-saga/effects';

import {
  requestProducts,
  productsSuccess,
  productsError,
} from '../reducers/products';
import { fetchAllProducts } from '../Api';

export function* fetchProducts() {
  try {
    const response = yield call(fetchAllProducts);
    const [, ...products] = response.data;
    yield put(productsSuccess(products));
  } catch (e) {
    yield put(productsError(e));
  }
}

export function* watchProductsRequest() {
  yield takeLatest(requestProducts.getType(), fetchProducts);
}
