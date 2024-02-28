import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NavType } from '../../types/types';

export interface navInitialState {
  currentNav: NavType;
}

const initialState: navInitialState = {
  currentNav: 'ALL',
};

export const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    changNav: (state, action: PayloadAction<NavType>) => {
      state.currentNav = action.payload;
    },
  },
});

export const { changNav } = navSlice.actions;
export default navSlice.reducer;
