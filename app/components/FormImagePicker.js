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
    borderRadius: 1
  },
  button: {
    paddingTop: 10,
    paddingBottom: 10,
    width: 150
  }
});

export default class FormImagePicker extends Component {
  selectPhoto() {
    selectPhotoTapped().then((localImage) => {
      this.props.setLocalImage(localImage);
    });
  }

  renderPhoto() {
    const { imageSource } = this.props;
    if (imageSource) {
      return (
        <Image
          source={{uri: imageSource}}
          style={styles.image}
        />
      );
    } else {
      return (
        <View style={styles.imagePlaceholder}>
          <Text>Place for an Image</Text>
        </View>
      );
    }
  }

  render() {
    return (
      <View style={styles.formImage}>
        <View style={styles.imageSection}>
          { this.renderPhoto() }
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
