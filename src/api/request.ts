import { TodoList } from "./list";

export const listRequest = async () => {
  return await TodoList.list().then((list) => list);
};
