import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { Router, Scene } from 'react-native-router-flux';

import rootReducer from './reducers';
import rootSaga from './sagas';

import Main from './scenes/Main.android';
import ProductForm from './scenes/ProductForm';
import SignIn from './scenes/SignIn';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  applyMiddleware(logger),
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

const App = () => (
  <Provider store={store}>
    <Router>
      <Scene key="Main" component={Main} hideNavBar initial />
      <Scene key="ProductForm" component={ProductForm} hideNavBar />
      <Scene key="SignIn" component={SignIn} hideNavBar />
    </Router>
  </Provider>
);

export default App;
