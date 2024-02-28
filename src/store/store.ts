import { configureStore } from '@reduxjs/toolkit';
import { todoSlice, navSlice } from './slice';

export const store = configureStore({
  reducer: { todoSlice, navSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
