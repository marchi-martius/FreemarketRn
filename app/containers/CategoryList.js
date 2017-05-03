import { connect } from 'react-redux';

import CategoryListView from '../components/CategoryListView';
import { loadCategories } from '../actions/categories';

mapStateToProps = (state) => ({
  categories: state.categories.records,
});

mapDispatchToProps = (dispatch) => ({
  loadCategories: () => dispatch(loadCategories()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryListView)
