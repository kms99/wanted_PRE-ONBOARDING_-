import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  todo: [],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {},
});

export const {} = todoSlice.actions;
export default todoSlice.reducer;
