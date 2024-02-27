import { useAppDispatch, useAppSelector } from './useRTK';
import {
  addTodo,
  deleteTodo,
  editTodo,
  updateTodo,
} from '../store/slice/todoSlice';
import { InputValue, UpdateValue } from '../types/types';

export default function useTodo() {
  const dispatch = useAppDispatch();
  const { todos } = useAppSelector((state) => state.todoSlice);

  const handleAddTodo = ({ title, contents }: InputValue) => {
    dispatch(addTodo({ title, contents }));
  };

  const handleUpdateTodo = (id: number) => {
    dispatch(updateTodo(id));
  };

  const handleDeleteTodo = (id: number) => {
    dispatch(deleteTodo(id));
  };

  const handleEditTodo = ({ id, title, contents }: UpdateValue) => {
    dispatch(editTodo({ id, title, contents }));
  };

  return {
    todos,
    handleDeleteTodo,
    handleUpdateTodo,
    handleAddTodo,
    handleEditTodo,
  };
}
