import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Todo, InputValue, UpdateValue } from '../../types/types';

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
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    editTodo: (state, action: PayloadAction<UpdateValue>) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            title: action.payload.title,
            contents: action.payload.contents,
          };
        } else {
          return { ...todo };
        }
      });
    },
  },
});

export const { addTodo, updateTodo, deleteTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;
