import { configureStore } from '@reduxjs/toolkit';
import homeReducer from './home/homeSlice';
import detailsReducer from './details/detailsSlice';

const store = configureStore({
  reducer: {
    home: homeReducer,
    details: detailsReducer,
  },
});

export default store;
