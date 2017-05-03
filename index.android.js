import React from 'react';
import { AppRegistry } from 'react-native';

import App from './app/containers/App';
import Main from './app/components/Main.android';

const FreemarketRn = () => <App><Main /></App>;
export default FreemarketRn;

AppRegistry.registerComponent('FreemarketRn', () => FreemarketRn);
