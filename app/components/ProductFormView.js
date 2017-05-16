import React, { Component } from 'react';
import { View, Button, Image, Text } from 'react-native';
import t from 'tcomb-form-native';
import ImagePicker from 'react-native-image-picker';

const Form = t.form.Form;

const Product = t.struct({
  name: t.String,
  price: t.Number,
});

export default class ProductForm extends Component {
  state = {
    avatarSrouce: null,
    image: null
  };

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
        let source = { uri: response.uri };

        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          avatarSource: source,
          localImage: response
        });
      }
    });
  }

  renderPhoto() {
    if (this.state.avatarSource) {
      return <Image source={this.state.avatarSource} style={{width: 150, height: 150}} />;
    } else {
      return <Text>Select a Photo</Text>;
    }
  }

  onFormPress() {
    const product = this.form.getValue();
    const { localImage } = this.state;
    this.props.onPress({product, localImage});
  }

  render() {
    return (
      <View>
        { this.renderPhoto() }
        <Button
          title="Add Image"
          onPress={() => this.selectPhotoTapped()}
        />
        <Form
          ref={ _form => this.form = _form }
          type={Product}
        />
        <Button
          onPress={() => this.onFormPress()}
          title="Add Product"
        />
      </View>
    )
  }
}
