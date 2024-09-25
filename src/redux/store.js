import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import initialState from './state';

const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
