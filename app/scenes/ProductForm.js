import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import ProductFormView from '../components/ProductFormView';
import { requestCreateProduct } from '../reducers/products';

const mapDispatchToProps = dispatch => ({
  onPress: payload => dispatch(requestCreateProduct(payload)),
  onBackPress: Actions.ProductIndex,
});

export default connect(undefined, mapDispatchToProps)(ProductFormView);
