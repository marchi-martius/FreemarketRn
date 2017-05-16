import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux'

import CategoryHeaderView from '../components/CategoryHeaderView';

const mapStateToProps = state => ({
  category: state.categories.current,
  onActionSelected: Actions.ProductForm
});

export default connect(mapStateToProps)(CategoryHeaderView);
