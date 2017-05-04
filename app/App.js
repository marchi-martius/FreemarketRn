import React, { PropTypes } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './reducers';

const store = createStore(rootReducer);

const App = ({ children }) => (
  <Provider store={store}>
    {children}
  </Provider>
);

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
