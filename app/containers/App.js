import React from 'react';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

import rootReducer from '../reducers';

const store = createStore(rootReducer);

const App = ({children}) => (
  <Provider store={store}>
    {children}
  </Provider>
)

export default App;
