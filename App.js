import React from 'react';
import Navigation from './Screens/Navigation';
import { Provider } from 'react-redux';
import store from './Redux/Store';


const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;