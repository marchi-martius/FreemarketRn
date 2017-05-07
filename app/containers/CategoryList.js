import { connect } from 'react-redux';

import CategoryListView from '../components/CategoryListView';
import { requestCategories, selectCategory } from '../reducers/categories';

const mapStateToProps = state => ({
  categories: state.categories.list.records,
});

const mapDispatchToProps = dispatch => ({
  loadCategories: () => dispatch(requestCategories()),
  onCategoryPress: category => dispatch(selectCategory(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryListView);
