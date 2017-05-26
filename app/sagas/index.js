import { all } from 'redux-saga/effects';

import { watchCategoriesRequest } from './categories';
import { watchProductsRequest, watchCreateProductRequest } from './products';

export default function* rootSaga() {
  yield all([
    watchCategoriesRequest(),
    watchProductsRequest(),
    watchCreateProductRequest(),
  ]);
}
