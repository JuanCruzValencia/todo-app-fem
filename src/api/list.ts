import { ITodo } from "../interfaces/interface";

export const TodoList = {
  list: () =>
    new Promise<ITodo[]>((resolve) => {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            content: "Nota 1",
            completed: true,
          },
          {
            id: 2,
            content: "Nota 2",
            completed: false,
          },
          {
            id: 3,
            content: "Nota 3",
            completed: false,
          },
          {
            id: 4,
            content: "Nota 4",
            completed: false,
          },
          {
            id: 5,
            content: "Nota 5",
            completed: false,
          },
          {
            id: 6,
            content: "Nota 6",
            completed: false,
          },
        ]);
      }, 2000);
    }),
};
