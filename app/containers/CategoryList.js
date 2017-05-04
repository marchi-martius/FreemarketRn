import { connect } from 'react-redux';

import CategoryListView from '../components/CategoryListView';
import { requestCategories } from '../reducers/categories';

const mapStateToProps = state => ({
  categories: state.categories.list.records,
});

const mapDispatchToProps = dispatch => ({
  loadCategories: () => dispatch(requestCategories()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryListView);
