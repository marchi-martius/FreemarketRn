import { combineReducers } from 'redux';
import { createAction, createReducer } from 'redux-act';

export const requestProducts = createAction('request products from API');
export const productsSuccess = createAction('products loaded from API');
export const productsError = createAction('failed products loading');

const initialListState = {
  completed: true,
  records: [],
  error: null,
};
const list = createReducer({
  [requestProducts]: state => ({ ...state, completed: false }),
  [productsSuccess]: (state, records) => ({
    ...state,
    records,
    completed: true,
  }),
  [productsError]: (state, error) => ({ ...state, error, completed: true }),
}, initialListState);

export default combineReducers({ list });
