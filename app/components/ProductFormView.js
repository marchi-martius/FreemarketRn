import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Button, StyleSheet } from 'react-native';
import t from 'tcomb-form-native';

import FormImagePicker from './FormImagePicker';

const styles = StyleSheet.create({
  formView: {
    padding: 10,
  },
  button: {
    paddingTop: 10,
    paddingBottom: 10,
  },
});

const Form = t.form.Form;

const Product = t.struct({
  name: t.String,
  price: t.Number,
});

export default class ProductForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageSrouce: null,
      localImage: null,
    };
  }

  onFormPress() {
    const product = this.form.getValue();
    const { localImage } = this.state;
    this.props.onPress({ product, localImage });
  }

  setLocalImage(localImage) {
    this.setState({
      imageSource: localImage.uri,
      localImage,
    });
  }

  render() {
    return (
      <View style={styles.formView}>
        <FormImagePicker
          imageSource={this.state.imageSource}
          setLocalImage={localImage => this.setLocalImage(localImage)}
        />
        <Form
          ref={_form => (this.form = _form)}
          type={Product}
        />
        <View style={styles.button}>
          <Button
            onPress={() => this.onFormPress()}
            title="Add Product"
          />
        </View>
        <View style={styles.button}>
          <Button
            style={styles.button}
            onPress={() => this.props.onBackPress()}
            color="red"
            title="Back"
          />
        </View>
      </View>
    );
  }
}

ProductForm.propTypes = {
  onPress: PropTypes.func.isRequired,
  onBackPress: PropTypes.func.isRequired,
};
