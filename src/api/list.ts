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
        ]);
      }, 2000);
    }),
};
