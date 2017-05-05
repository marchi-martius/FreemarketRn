import { combineReducers } from 'redux';
import { createAction, createReducer } from 'redux-act';

export const requestCategories = createAction('request categories from API');
export const categoriesSuccess = createAction('categories loaded from API');
export const categoriesError = createAction('failed categories loading');

export const selectCategory = createAction('change current category');

const initialListState = {
  completed: true,
  records: [],
  error: null,
};
const list = createReducer({
  [requestCategories]: state => ({ ...state, completed: false }),
  [categoriesSuccess]: (state, records) => ({
    ...state,
    records,
    completed: true,
  }),
  [categoriesError]: (state, error) => ({ ...state, error, completed: true }),
}, initialListState);

const initialCurrentState = {
  id: -1,
  name: '',
};
const current = createReducer({
  [selectCategory]: (_, category) => category,
}, initialCurrentState);

export default combineReducers({ list, current });
