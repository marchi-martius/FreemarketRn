import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Keyboard } from 'react-native';

import ProductFormView from '../components/ProductFormView';
import { requestCreateProduct } from '../reducers/products';

const mapDispatchToProps = (dispatch) => ({
  onPress: (payload) => {
    Keyboard.dismiss();
    if (payload.product) {
      dispatch(requestCreateProduct(payload));
    }
  },
  onBackPress: Actions.ProductIndex
});

export default connect(undefined, mapDispatchToProps)(ProductFormView);
