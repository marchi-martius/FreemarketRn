import React, { Component } from 'react';
import { View, Button } from 'react-native';
import t from 'tcomb-form-native';

const Form = t.form.Form;

const Product = t.struct({
  name: t.String,
  price: t.Number,
});

export default class ProductForm extends Component {
  render() {
    return (
      <View>
        <Form
          ref={ _form => this.form = _form }
          type={Product}
        />
        <Button
          onPress={() => this.props.onPress(this.form.getValue())}
          title="Add Product"
        />
      </View>
    )
  }
}
