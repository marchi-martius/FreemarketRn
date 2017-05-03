import { combineReducers } from 'redux';
import { createAction, createReducer } from 'redux-act';
import categories from '../constants/categories';

export const loadCategories = createAction('load categories list');
export const selectCategory = createAction('change current category');

const listReducer = createReducer({
  [loadCategories]: (state) => categories,
}, []);

const currentReducer = createReducer({
  [selectCategory]: (state, payload) => payload,
}, 0)

export default combineReducers({
  list: listReducer,
  current: currentReducer,
});
