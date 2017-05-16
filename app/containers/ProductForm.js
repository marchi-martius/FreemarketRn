import { connect } from 'react-redux';
import ProductFormView from '../components/ProductFormView';
import { createProduct } from '../Api';
import { Actions } from 'react-native-router-flux'

const mapDispatchToProps = (dispatch) => ({
  onPress: (value) => {
    if (value) {
      console.log(value.name, value.price);
      const image = "http://i.ebayimg.com/images/g/64EAAOSwCQZZDJPO/s-l1600.jpg";
      createProduct({...value, image: image}).then((response) => {
        console.log(response);
        Actions.ProductIndex();
      });
    }
  }
});

export default connect(undefined, mapDispatchToProps)(ProductFormView);
