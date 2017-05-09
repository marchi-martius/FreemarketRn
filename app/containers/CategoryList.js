import { connect } from 'react-redux';

import CategoryListView from '../components/CategoryListView';
import { requestCategories, selectCategory } from '../reducers/categories';

const mapStateToProps = state => ({
  categories: state.categories.list.records,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  loadCategories: () => dispatch(requestCategories()),
  onCategoryPress: (category) => {
    dispatch(selectCategory(category));
    ownProps.afterCategoryPress();
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryListView);
