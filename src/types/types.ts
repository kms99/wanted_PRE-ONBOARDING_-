type Inputs = {
  titleValue: string;
  contentsValue: string;
};

type Todo = {
  id: number;
  title: string;
  contents: string;
  isDone: boolean;
};

type InputValue = Omit<Todo, 'isDone' | 'id'>;

type UpdateValue = Omit<Todo, 'isDone'>;

export type { Inputs, Todo, InputValue, UpdateValue };
