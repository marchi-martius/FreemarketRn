import { connect } from 'react-redux';

import CategoryListRow from '../components/CategoryListRow';
import { selectCategory } from '../reducers/categories';

mapStateToProps = (state, ownProps) => {
  const { id: currentId } = state.categories;
  const { name } = ownProps;

  return { id, name };
}

mapDispatchToProps = (dispatch, ownProps) => ({
  onPress: () => dispatch(selectCategory(ownProps.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryListRow);
