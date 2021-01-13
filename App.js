import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import Home from './src/Screens/Home';

const App = () => (
  <>
    <StatusBar barStyle="dark-content" />
    <Provider store={store}>
      <Home />
    </Provider>
  </>
);

export default App;
