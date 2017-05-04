import { connect } from 'react-redux';

import CategoryListRow from '../components/CategoryListRow';
import { selectCategory } from '../reducers/categories';

const mapDispatchToProps = (dispatch, ownProps) => ({
  onPress: () => dispatch(selectCategory(ownProps)),
});

export default connect(undefined, mapDispatchToProps)(CategoryListRow);
