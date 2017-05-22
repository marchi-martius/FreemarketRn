import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Image, Text, Button, StyleSheet } from 'react-native';

import { selectPhotoTapped } from '../services/ImagePickerService';

const styles = StyleSheet.create({
  formImage: {
    alignItems: 'center',
  },
  imageSection: {
    width: 150,
    height: 150,
  },
  image: {
    flex: 1,
  },
  imagePlaceholder: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 4,
    borderStyle: 'dotted',
    borderRadius: 1,
  },
  button: {
    paddingTop: 10,
    paddingBottom: 10,
    width: 150,
  },
});

const renderPlaceholder = () => (
  <View style={styles.imagePlaceholder}>
    <Text>Place for an Image</Text>
  </View>
);

export default class FormImagePicker extends Component {
  selectPhoto() {
    selectPhotoTapped().then((localImage) => {
      this.props.setLocalImage(localImage);
    });
  }

  renderImage() {
    return (
      <Image
        source={{ uri: this.props.imageSource }}
        style={styles.image}
      />
    );
  }

  renderImageBlock() {
    if (this.props.imageSource) {
      return this.renderImage();
    } else {
      return renderPlaceholder();
    }
  }

  render() {
    return (
      <View style={styles.formImage}>
        <View style={styles.imageSection}>
          { this.renderImageBlock() }
        </View>
        <View style={styles.button}>
          <Button
            title="Select Image"
            onPress={() => this.selectPhoto()}
          />
        </View>
      </View>
    );
  }
}

FormImagePicker.propTypes = {
  imageSource: PropTypes.string,
  setLocalImage: PropTypes.func.isRequired,
};

FormImagePicker.defaultProps = {
  imageSource: null,
};
