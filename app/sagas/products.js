import {
  put,
  call,
  takeLatest,
} from 'redux-saga/effects';
import { Actions } from 'react-native-router-flux';

import {
  requestProducts,
  productsSuccess,
  productsError,

  requestCreateProduct,
  createProductSuccess,
  createProductError,
} from '../reducers/products';

import {
  fetchAllProducts,
  createNewProduct,
} from '../api/rest';
import { saveImageToStorage } from '../api/firebase';

import {
  objectWithRecordsToArray,
  isUnauthorizedError,
} from './util';

export function* fetchProducts() {
  try {
    const { data } = yield call(fetchAllProducts);
    const products = objectWithRecordsToArray(data).reverse(); // new records first

    yield put(productsSuccess(products));
  } catch (e) {
    yield put(productsError(e));
    if (isUnauthorizedError(e)) {
      yield call(Actions.SignIn);
    }
  }
}

export function* watchProductsRequest() {
  yield takeLatest(requestProducts.getType(), fetchProducts);
}

export function* createProduct({ payload }) {
  try {
    const { localImage, product } = payload;

    const image = yield call(saveImageToStorage, localImage);
    yield call(createNewProduct, { ...product, image });
    yield put(createProductSuccess());
    yield call(Actions.Main);
  } catch (e) {
    yield put(createProductError(e));
  }
}

export function* watchCreateProductRequest() {
  yield takeLatest(requestCreateProduct.getType(), createProduct);
}
