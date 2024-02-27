import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo, InputValue } from '../../types/types';

export interface TodoInitialState {
  todos: Todo[];
}

const initialState: TodoInitialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<InputValue>) => {
      state.todos = [
        { ...action.payload, isDone: false, id: Date.now() },
        ...state.todos,
      ];
    },

    updateTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.map((todo) => {
        return todo.id === action.payload
          ? { ...todo, isDone: !todo.isDone }
          : { ...todo };
      });
    },
  },
});

export const { addTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
