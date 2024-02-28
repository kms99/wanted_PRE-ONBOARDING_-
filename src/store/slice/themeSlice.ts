import { createSlice } from '@reduxjs/toolkit';
import { ThemeType } from '../../types/enums';

export interface themeInitialState {
  themeMode: ThemeType;
}

const initialState: themeInitialState = {
  themeMode: ThemeType.light,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.themeMode = state.themeMode ? ThemeType.dark : ThemeType.light;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
