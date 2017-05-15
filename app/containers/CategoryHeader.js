import { connect } from 'react-redux';

import CategoryHeaderView from '../components/CategoryHeaderView';

const mapStateToProps = state => ({
  category: state.categories.current,
});

export default connect(mapStateToProps)(CategoryHeaderView);
