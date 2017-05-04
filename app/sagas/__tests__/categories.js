import { call, put } from 'redux-saga/effects';

import { fetchCategories, watchCategoriesRequest } from '../categories';
import { categoriesSuccess, categoriesError } from '../../reducers/categories';
import { fetchAllCategories } from '../../Api';

describe('requestCategories', () => {
  it('calls success action on resolve', () => {
    const gen = fetchCategories();
    const response = { json: () => [] }

    expect(gen.next().value).toEqual(call(fetchAllCategories));
    expect(gen.next(response).value).toEqual(put(categoriesSuccess([])));
  });

  it('calls error on failure', () => {
    const gen = fetchCategories();
    const error = {}

    expect(gen.next().value).toEqual(call(fetchAllCategories));
    expect(gen.throw(error).value).toEqual(put(categoriesError(error)));
  });
});
