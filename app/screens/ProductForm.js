import React, { Component } from 'react';
import { View, Button } from 'react-native';
import t from 'tcomb-form-native';

const Form = t.form.Form;

const Product = t.struct({
  name: t.String,
  price: t.Number,
});

class ProductForm extends Component {
  onPress() {
    const value = this.form.getValue();
    if (value) {
      console.log(value.name, value.price);
    }
  }
  render() {
    return (
      <View>
        <Form
          ref={ _form => this.form = _form }
          type={Product}
        />
        <Button
          onPress={() => this.onPress()}
          title="Add Product"
        />
      </View>
    )
  }
}

export default ProductForm;
