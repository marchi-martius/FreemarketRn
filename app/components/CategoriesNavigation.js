import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import categories from '../constants/categories';
import CategoryList from './CategoryList';

const styles = StyleSheet.create({
  base: {
    flex: 1,
    alignItems: 'center',
  },
});

const CategoriesNavigation  = () => (
  <View style={styles.base}>
    <Text>Categories</Text>
    <CategoryList
      categories={categories}
      onPressCategory={index => index}
    />
  </View>
);

export default CategoriesNavigation;
