import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux'
import { Keyboard } from 'react-native'

import ProductFormView from '../components/ProductFormView';
import { requestCreateProduct } from '../reducers/products';

const mapDispatchToProps = (dispatch) => ({
  onPress: (payload) => {
    Keyboard.dismiss();
    if (payload.product) {
      // const image = "http://i.ebayimg.com/images/g/64EAAOSwCQZZDJPO/s-l1600.jpg";
      // dispatch(requestCreateProduct({...product, image: image}));
      dispatch(requestCreateProduct(payload));
    }
  }
});

export default connect(undefined, mapDispatchToProps)(ProductFormView);
