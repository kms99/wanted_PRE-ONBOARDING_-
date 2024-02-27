type Inputs = {
  titleValue: string;
  contentsValue: string;
};

type Todo = {
  title: string;
  contents: string;
  isDone: boolean;
};

type InputValue = Omit<Todo, 'isDone'>;

export type { Inputs, Todo, InputValue };
