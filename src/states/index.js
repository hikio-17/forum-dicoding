import { configureStore } from '@reduxjs/toolkit';
import authReducers from './auth/reducer';
import usersReducers from './users/reducer';
import threadsReducers from './threads/reducer';

const store = configureStore({
  reducer: {
    authUser: authReducers,
    users: usersReducers,
    threads: threadsReducers,
  },
});

export default store;
