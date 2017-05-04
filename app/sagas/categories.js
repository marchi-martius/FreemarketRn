import { put, call, takeEvery } from 'redux-saga/effects';

import {
  categoriesSuccess,
  categoriesError,
  requestCategories,
} from '../reducers/categories';
import fetchAllCategories from '../Api';

export function* fetchCategories() {
  try {
    const data = yield call(fetchAllCategories);
    const categories = data.json();
    yield put(categoriesSuccess(categories));
  } catch(e) {
    yield put(categoriesError(e));
  }
}

export function* watchCategoriesRequest() {
  yield takeEvery(requestCategories.getType(), fetchCategories);
}
