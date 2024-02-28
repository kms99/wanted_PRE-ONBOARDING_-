import { createSlice } from '@reduxjs/toolkit';
import { ThemeType } from '../../types/enums';

export interface themeInitialState {
  themeMode: ThemeType;
}

const initialState: themeInitialState = {
  themeMode:
    localStorage.getItem('todo-theme') === 'dark'
      ? ThemeType.dark
      : ThemeType.light,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.themeMode = state.themeMode ? ThemeType.dark : ThemeType.light;
      localStorage.setItem('todo-theme', state.themeMode ? 'light' : 'dark');
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
