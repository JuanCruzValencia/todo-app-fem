import { createContext, useEffect, useState } from "react";
import { ITodo, ITodoContextProps } from "../interfaces/interface";
import { listRequest } from "../api/request";

type Props = {
  children: React.ReactNode;
};

export const TodoContext = createContext({} as ITodoContextProps);

export const TodoContextProvider: React.FC<Props> = ({ children }) => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchList = async () => {
      const resolve = await listRequest();
      setTodos(resolve);
      setIsLoading(false);
    };
    fetchList();
  }, []);

  const addTodo = (todo?: string) => {
    if (todo) {
      const todoObj: ITodo = {
        completed: false,
        content: todo,
        id: todos.length + 1,
      };

      setTodos((prevState) => {
        return [...prevState, todoObj];
      });
    }
  };

  const deleteTodo = (id: number) => {
    const findTodo = todos.find((todo) => todo.id === id);

    if (findTodo) {
      const filterTodos = todos.filter((todo) => todo.id !== id);

      setTodos(filterTodos);
    }

    throw new Error("Todo not found");
  };

  const completeTodo = (id: number) => {
    const editedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }

      return todo;
    });

    setTodos(editedTodos);
  };

  const deleteCompleted = () => {
    const filterTodos = todos.filter((todo) => todo.completed === true);

    filterTodos.forEach((todo) => {
      return deleteTodo(todo.id);
    });
  };

  const data = { todos, isLoading, addTodo, deleteTodo, completeTodo, deleteCompleted };

  return <TodoContext.Provider value={data}>{children}</TodoContext.Provider>;
};
