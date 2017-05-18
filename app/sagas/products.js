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
import { fetchAllProducts, createNewProduct } from '../Api';
import { saveImageToStorage } from '../FirebaseApi';
import { objectWithRecordsToArray } from '../lib/helpers';

export function* fetchProducts() {
  try {
    const { data } = yield call(fetchAllProducts);
    const products = objectWithRecordsToArray(data).reverse(); // new records first
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
    const image = yield call(saveImageToStorage, localImage);
    yield call(createNewProduct, { ...product, image });
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
