import { connect } from 'react-redux';

import CategoryOverviewView from '../components/CategoryOverviewView';

const mapStateToProps = state => ({
  category: state.categories.current,
});

export default connect(mapStateToProps)(CategoryOverviewView);
