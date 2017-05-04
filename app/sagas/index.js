import { all } from 'redux-saga/effects';

import { watchCategoriesRequest } from './categories';

export default function* rootSaga() {
  yield all([
    watchCategoriesRequest(),
  ]);
}
