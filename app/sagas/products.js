import { put, call, takeLatest } from 'redux-saga/effects';

import {
  requestProducts,
  productsSuccess,
  productsError,
} from '../reducers/products';
import { fetchAllProducts } from '../Api';

export function* fetchProducts() {
  try {
    const { data } = yield call(fetchAllProducts);
    const products = Object.keys(data).map((k) => data[k]).reverse();
    yield put(productsSuccess(products));
  } catch (e) {
    yield put(productsError(e));
  }
}

export function* watchProductsRequest() {
  yield takeLatest(requestProducts.getType(), fetchProducts);
}
