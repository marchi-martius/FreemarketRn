import { connect } from 'react-redux';

import CategoryListView from '../components/CategoryListView';
import { loadCategories } from '../reducers/categories';

const mapStateToProps = state => ({
  categories: state.categories.list,
});

const mapDispatchToProps = dispatch => ({
  loadCategories: () => dispatch(loadCategories()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryListView);
