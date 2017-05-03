import { AppRegistry } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './app/reducers'

import AndroidApp from './app/components/AndroidApp';

const store = createStore(rootReducer);

const FreemarketRn = () => (
  <Provider store={store}>
    <AndroidApp />
  </Provider>
);
export default FreemarketRn;

AppRegistry.registerComponent('FreemarketRn', () => FreemarketRn);
