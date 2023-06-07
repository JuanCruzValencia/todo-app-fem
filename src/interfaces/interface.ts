export interface ITodo {
  id: number;
  content: string;
  completed: boolean;
}

export interface IFormField {
  todo?: string;
}

export interface ITodoContextProps {
  filteredTodos: ITodo[];
  isLoading: boolean;
  filter: FILTER;
  handleFilter: (filter: FILTER) => void;
  addTodo: (todo?: string) => void;
  deleteTodo: (id: number) => void;
  completeTodo: (id: number) => void;
  deleteCompleted: () => void;
}

export interface IThemeContextProps {
  theme: THEME;
  handleThemeColor: () => void;
}

export enum FILTER {
  ALL = "All",
  ACTIVE = "Active",
  COMPLETED = "Completed",
}

export enum THEME {
  LIGHT = "light",
  DARK = "dark",
}
