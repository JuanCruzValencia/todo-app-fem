import { ITodo } from "../interfaces/interface";

export const TodoList = {
  list: () =>
    new Promise<ITodo[]>((resolve) => {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            content: "Test note 1: Should fix some styles...",
            completed: true,
          },
          {
            id: 2,
            content: "Test Nota 2: Click me if you like it :)",
            completed: false,
          },
        ]);
      }, 2000);
    }),
};
