import categoriesList from '../constants/categories'

const initialState = {
  records: categoriesList,
}

const categories = (state = initialState, action) => state;

export default categories;
