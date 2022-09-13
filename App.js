import React from 'react';
import Navigation from './Screens/Navigation';
import { Provider } from 'react-redux';
import store from './Redux/Store';
import PhoneCall from './Screens/PhoneCall';


const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
    // <PhoneCall />
  );
};

export default App;