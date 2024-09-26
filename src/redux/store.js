import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import initialState from './state';
import { thunk } from 'redux-thunk';

const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
