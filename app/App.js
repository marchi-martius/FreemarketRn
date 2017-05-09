import React from 'react';
import PropTypes from 'prop-types';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware),
  applyMiddleware(logger),
);

sagaMiddleware.run(rootSaga);

const App = ({ children }) => (
  <Provider store={store}>
    {children}
  </Provider>
);

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
