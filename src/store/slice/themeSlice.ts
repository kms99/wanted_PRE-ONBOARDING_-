import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ThemeType } from '../../types/types';

export interface themeInitialState {
  themeMode: ThemeType;
}

const initialState: themeInitialState = {
  themeMode: 'light',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state, action: PayloadAction<ThemeType>) => {
      state.themeMode = action.payload;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
