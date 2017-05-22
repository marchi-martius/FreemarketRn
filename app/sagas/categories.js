import { put, call, takeLatest } from 'redux-saga/effects';

import {
  categoriesSuccess,
  categoriesError,
  requestCategories,
} from '../reducers/categories';
import { fetchAllCategories } from '../Api';
import { objectWithRecordsToArray } from '../lib/helpers';

export function* fetchCategories() {
  try {
    const { data } = yield call(fetchAllCategories);
    const categories = objectWithRecordsToArray(data);
    yield put(categoriesSuccess(categories));
  } catch (e) {
    yield put(categoriesError(e));
  }
}

export function* watchCategoriesRequest() {
  yield takeLatest(requestCategories.getType(), fetchCategories);
}
