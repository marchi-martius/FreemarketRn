import React, { Component } from 'react';
import { View, Image, Text, Button } from 'react-native';
import ImagePicker from 'react-native-image-picker';

export default class FormImagePicker extends Component {
  selectPhotoTapped() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true
      }
    };

    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled photo picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        this.props.setLocalImage(response);
      }
    });
  }

  renderPhoto() {
    if (this.props.imageSource) {
      return (
        <Image
          source={{uri: this.props.imageSource}}
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
          onPress={() => this.selectPhotoTapped()}
        />
      </View>
    );
  }
}
