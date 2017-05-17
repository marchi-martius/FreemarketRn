import React, { Component } from 'react';
import { View, Button, Text } from 'react-native';
import t from 'tcomb-form-native';

import FormImagePicker from './FormImagePicker';

const Form = t.form.Form;

const Product = t.struct({
  name: t.String,
  price: t.Number,
});

export default class ProductForm extends Component {
  state = {
    imageSrouce: null,
    localImage: null
  };

  setLocalImage(localImage) {
    this.setState({
      imageSource: localImage.uri,
      localImage: localImage
    });
  }

  onFormPress() {
    const product = this.form.getValue();
    const { localImage } = this.state;
    this.props.onPress({product, localImage});
  }

  render() {
    return (
      <View>
        <FormImagePicker
          imageSource={this.state.imageSource}
          setLocalImage={(localImage) => this.setLocalImage(localImage)}
        />
        <Form
          ref={ _form => this.form = _form }
          type={Product}
        />
        <Button
          onPress={() => this.onFormPress()}
          title="Add Product"
        />
        <Button
          onPress={() => this.props.onBackPress()}
          color="red"
          title="Back"
        />
      </View>
    )
  }
}
