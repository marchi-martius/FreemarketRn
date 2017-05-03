import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import CategoryList from '../containers/CategoryList';

const styles = StyleSheet.create({
  base: {
    flex: 1,
    alignItems: 'center',
  },
});

const CategoriesNavigation  = () => (
  <View style={styles.base}>
    <Text>Categories</Text>
    <CategoryList />
  </View>
);

export default CategoriesNavigation;
