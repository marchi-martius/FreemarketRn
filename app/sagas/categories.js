import { put, call, takeLatest } from 'redux-saga/effects';
import { Actions } from 'react-native-router-flux';

import {
  categoriesSuccess,
  categoriesError,
  requestCategories,
} from '../reducers/categories';

import { fetchAllCategories } from '../api/rest';
import {
  objectWithRecordsToArray,
  isUnauthorizedError,
} from './util';

export function* fetchCategories() {
  try {
    const { data } = yield call(fetchAllCategories);
    const categories = objectWithRecordsToArray(data);
    yield put(categoriesSuccess(categories));
  } catch (e) {
    yield put(categoriesError(e));
    if (isUnauthorizedError(e)) {
      yield call(Actions.SignIn);
    }
  }
}

export function* watchCategoriesRequest() {
  yield takeLatest(requestCategories.getType(), fetchCategories);
}
