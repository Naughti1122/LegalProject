import { configureStore } from '@reduxjs/toolkit';
import Reducer1 from '../Redux/Reducer1';

const store = configureStore({
  reducer: {
     Reducer1
  }
});

export default store;