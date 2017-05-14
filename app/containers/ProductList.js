import { connect } from 'react-redux';
import ProductListView from '../components/ProductListView';
import { requestProducts } from '../reducers/products';


const mapStateToProps = state => ({
  products: state.products.list.records,
});

const mapDispatchToProps = dispatch => ({
  loadProducts: () => dispatch(requestProducts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductListView);
