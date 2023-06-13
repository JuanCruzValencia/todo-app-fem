import { createContext, useEffect, useMemo, useRef, useState } from "react";
import { FILTER, ITodo, ITodoContextProps } from "../interfaces/interface";
import { listRequest } from "../api/request";

type Props = {
  children: React.ReactNode;
};

export const TodoContext = createContext({} as ITodoContextProps);

export const TodoContextProvider: React.FC<Props> = ({ children }) => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [filter, setFilter] = useState<FILTER>(FILTER.ALL);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const dragTodo = useRef<number | null>(null);
  const dropTodo = useRef<number | null>(null);

  useEffect(() => {
    const fetchList = async () => {
      const resolve = await listRequest();
      setTodos(resolve);
      setIsLoading(false);
    };
    fetchList();
  }, []);

  const filteredTodos = useMemo(() => {
    const todosCopy = [...todos];

    switch (filter) {
      case FILTER.ACTIVE:
        return todosCopy.filter((todo) => todo.completed === false);
      case FILTER.COMPLETED:
        return todosCopy.filter((todo) => todo.completed === true);
      default:
        return todosCopy;
    }
  }, [todos, filter]);

  const handleFilter = (filter: FILTER) => {
    setFilter(filter);
  };

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

  const dragTodoStart = (
    e: React.DragEvent<HTMLDivElement>,
    position: number
  ) => {
    dragTodo.current = position;
    const data = e.target as HTMLElement;
    console.log(data.innerHTML);
  };

  const dragTodoEnd = (
    e: React.DragEvent<HTMLDivElement>,
    position: number
  ) => {
    dropTodo.current = position;
    const data = e.target as HTMLElement;
    console.log(data.innerHTML);
  };

  const dropTodoHandler = () => {
    const copyListItems = [...filteredTodos];

    if (dragTodo.current === null || dropTodo.current === null) return;

    const dragItemContent = copyListItems[dragTodo.current];
    copyListItems.splice(dragTodo.current, 1);
    copyListItems.splice(dropTodo.current, 0, dragItemContent);
    dragTodo.current = null;
    dropTodo.current = null;
    setTodos(copyListItems);
  };

  const data = {
    filteredTodos,
    isLoading,
    filter,
    handleFilter,
    addTodo,
    deleteTodo,
    completeTodo,
    deleteCompleted,
    dragTodoStart,
    dragTodoEnd,
    dropTodoHandler,
  };

  return <TodoContext.Provider value={data}>{children}</TodoContext.Provider>;
};
