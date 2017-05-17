import React, { Component } from 'react';
import { View, Image, Text, Button } from 'react-native';
import { selectPhotoTapped } from '../services/ImagePickerService';

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
          style={{width: 150, height: 150}}
        />
      );
    } else {
      return <Text>Select a Photo</Text>;
    }
  }

  render() {
    return (
      <View>
        { this.renderPhoto() }
        <Button
          title="Add Image"
          onPress={() => this.selectPhoto()}
        />
      </View>
    );
  }
}
