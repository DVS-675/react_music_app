
import { configureStore } from '@reduxjs/toolkit';
import tracksReducer from './reducers/tracks';

const store = configureStore({
  reducer: {
    tracks: tracksReducer,
  },
});

export default store;
