import { put, call, takeLatest } from 'redux-saga/effects';

import {
  categoriesSuccess,
  categoriesError,
  requestCategories,
} from '../reducers/categories';
import { fetchAllCategories } from '../Api';

export function* fetchCategories() {
  try {
    const { data } = yield call(fetchAllCategories);
    const categories = Object.keys(data)
      .map(id => ({ ...data[id], id }));
    yield put(categoriesSuccess(categories));
  } catch (e) {
    yield put(categoriesError(e));
  }
}

export function* watchCategoriesRequest() {
  yield takeLatest(requestCategories.getType(), fetchCategories);
}
