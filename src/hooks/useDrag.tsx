import { useContext, useRef, useState } from "react";
import { TodoContext } from "../context/todo.context";
import { ITodo } from "../interfaces/interface";

const useDragEvent = () => {
  const dragItem = useRef<number | null>(null);
  const dropItem = useRef<number | null>(null);
  const { filteredTodos } = useContext(TodoContext);
  const [todos, setTodos] = useState<ITodo[]>(filteredTodos);

  const dragStart = (e: React.DragEvent<HTMLDivElement>, position: number) => {
    dragItem.current = position;
    const data = e.target as HTMLElement;
    console.log(data.innerHTML);
  };

  const dragEnd = (e: React.DragEvent<HTMLDivElement>, position: number) => {
    dropItem.current = position;
    const data = e.target as HTMLElement;
    console.log(data.innerHTML);
  };

  const dropItemHandler = () => {
    const copyListItems = [...filteredTodos];

    if (dragItem.current === null || dropItem.current === null) return;

    const dragItemContent = copyListItems[dragItem.current];
    copyListItems.splice(dragItem.current, 1);
    copyListItems.splice(dropItem.current, 0, dragItemContent);
    dragItem.current = null;
    dropItem.current = null;
    setTodos(copyListItems);
  };

  console.log(todos);

  return {
    dragStart,
    dragEnd,
    dropItemHandler,
    todos,
  };
};

export default useDragEvent;
