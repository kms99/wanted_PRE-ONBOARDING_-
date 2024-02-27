import { configureStore } from '@reduxjs/toolkit';
import { todoSlice } from './slice';

export const store = configureStore({
  reducer: { todoSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
