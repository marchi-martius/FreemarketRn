import { call, put } from 'redux-saga/effects';

import { fetchCategories } from '../categories';
import { categoriesSuccess, categoriesError } from '../../reducers/categories';
import fetchAllCategories from '../../Api';

describe('fetchCategories', () => {
  it('calls success action on resolve', () => {
    const gen = fetchCategories();
    const categories = [];
    const response = { json: () => categories };

    expect(gen.next().value).toEqual(call(fetchAllCategories));
    expect(gen.next(response).value).toEqual(put(categoriesSuccess(categories)));
  });

  it('calls error on failure', () => {
    const gen = fetchCategories();
    const error = {};

    expect(gen.next().value).toEqual(call(fetchAllCategories));
    expect(gen.throw(error).value).toEqual(put(categoriesError(error)));
  });
});
