import { configureStore } from '@reduxjs/toolkit';
import { todoSlice, navSlice, themeSlice } from './slice';

export const store = configureStore({
  reducer: { todoSlice, navSlice, themeSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
