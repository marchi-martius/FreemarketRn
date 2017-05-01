import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { connect, Provider } from 'react-redux';
import { createStore } from 'redux';

// import ProductsList from './app/containers/ProductsList';
// import CategoriesList from './app/containers/CategoriesList';
// import { Categories } from './app/lib/Constants';
import rootReducer from './app/reducers';
import App from './app/App';
import { Categories } from './app/lib/Constants';

const initialState = {
  categories: Categories,
  categoryIndex: 0
};
const store = createStore(rootReducer, initialState);

export default class FreemarketRn extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('FreemarketRn', () => FreemarketRn);
