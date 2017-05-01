import { combineReducers } from 'redux';

import categoryIndex from './categoryIndex';
import categories from './categories';

const rootReducer = combineReducers({
  categories,
  categoryIndex
});

export default rootReducer;
