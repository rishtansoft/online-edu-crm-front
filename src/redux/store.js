import { configureStore } from '@reduxjs/toolkit';
import authReducer from './userReducer';

const store = configureStore({
  reducer: {
    auth: authReducer
  }
});

export default store;