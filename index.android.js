import React from 'react';
import { AppRegistry } from 'react-native';

import App from './app/App';
import Main from './app/screens/Main.android';

const FreemarketRn = () => <App><Main /></App>;
export default FreemarketRn;

AppRegistry.registerComponent('FreemarketRn', () => FreemarketRn);
