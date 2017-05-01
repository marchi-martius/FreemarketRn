const categoriesReducer = (state, action) => {
  switch (action.type) {
    case: 'SET_CURRENT_CATEGORY':
      return Object.assign({}, state, {
        categoryIndex: action.categoryIndex
      });
    default:
      return state;
  }
}

export default categoriesReducer;
