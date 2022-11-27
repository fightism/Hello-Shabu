import { configureStore } from '@reduxjs/toolkit';
import shabuReducer from './shabuReducer';

export const store = configureStore({
  reducer: {
shabu : shabuReducer
  }
});
