const categoryIndex = (state = 0, action) => {
  switch (action.type) {
    case 'SET_CURRENT_CATEGORY':
      return action.categoryIndex;
    default:
      return state;
  }
}

export default categoryIndex;
