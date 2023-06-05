export interface ITodo {
  id: number;
  content: string;
  completed: boolean;
}

export interface IFormField {
  todo?: string;
}

export interface ITodoContextProps {
  todos: ITodo[];
  isLoading: boolean;
  addTodo: (todo?: string) => void;
  deleteTodo: (id: number) => void;
  completeTodo: (id: number) => void;
}
