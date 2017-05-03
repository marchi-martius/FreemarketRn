import React from 'react';
import { AppRegistry } from 'react-native';

import App from './app/containers/App';
import Category from './app/components/Category.android';

const FreemarketRn = () => (
  <App>
    <Category />
  </App>
);
export default FreemarketRn;

AppRegistry.registerComponent('FreemarketRn', () => FreemarketRn);
