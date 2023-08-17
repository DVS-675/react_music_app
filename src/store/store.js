
import { configureStore } from '@reduxjs/toolkit';
// import thunk from 'redux-thunk';
import tracksReducer from './reducers/tracks';
import { tracksApi } from '../services/tracks';

const store = configureStore({
  reducer: {
    [tracksApi.reducerPath]: tracksApi.reducer,
    tracks: tracksReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tracksApi.middleware),
});

export default store;
