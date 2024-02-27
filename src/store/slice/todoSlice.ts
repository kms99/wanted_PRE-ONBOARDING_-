import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo, InputValue } from '../../types/types';

export interface TodoInitialState {
  todo: Todo[];
}

const initialState: TodoInitialState = {
  todo: [],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<InputValue>) => {
      state.todo = [{ ...action.payload, isDone: false }, ...state.todo];
    },
  },
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
