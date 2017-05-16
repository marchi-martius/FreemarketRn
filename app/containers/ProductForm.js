import { connect } from 'react-redux';
import ProductFormView from '../components/ProductFormView';

const mapDispatchToProps = (dispatch) => ({
  onPress: (value) => {
    if (value) {
      console.log(value.name, value.price);
    }
  }
});

export default connect(undefined, mapDispatchToProps)(ProductFormView);
