import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, ToolbarAndroid } from 'react-native';
import colors from '../constants/colors';
import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  toolbar: {
    height: 56,
    backgroundColor: colors.toolbar,
  },
});

class CategoryHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      icon: null
    }
  }

  componentWillMount() {
    Icon.getImageSource('bars', 30, 'white').then((source) => this.setState({ icon: source }));
  }

  render() {
    const { icon } = this.state;
    if(!icon) return null;

    return (
      <ToolbarAndroid
        navIcon={icon}
        onIconClicked={() => this.props.openDrawer()}
        title={this.props.category.name}
        style={styles.toolbar}
        titleColor="white"
      />
    );
  }
}

CategoryHeader.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default CategoryHeader;
