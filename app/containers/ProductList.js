import { connect } from 'react-redux';

import ProductListView from '../components/ProductListView';

mapStateToProps = (state) => ({
  category: state.categories.current
});

export default connect(mapStateToProps)(ProductListView)
