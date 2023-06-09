import { useContext } from "react";
import { ITodo, THEME } from "../../interfaces/interface";
import { TodoContext } from "../../context/todo.context";
import { ThemeContext } from "../../context/theme.context";
import IconCheck from "../common/IconCheck";
import IconCross from "../common/IconCross";

type Props = {
  todo: ITodo;
  handleDragging: (dragging: boolean) => void;
};

const ListItem: React.FC<Props> = ({ todo, handleDragging }) => {
  const { completeTodo, deleteTodo } = useContext(TodoContext);
  const { theme } = useContext(ThemeContext);

  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData("number", `${todo.id}`);
    handleDragging(true);
  };

  const handleDragEnd = () => handleDragging(false);

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      className={`flex w-full justify-between gap-3 p-4 rounded ${
        theme === THEME.LIGHT ? "bg-white" : "bg-VDGrayishBlueThree"
      }`}
    >
      <div className="flex gap-5">
        <IconCheck completed={todo.completed} />
        <p
          onClick={() => completeTodo(todo.id)}
          className={
            todo.completed
              ? "line-through text-DDGrayBlue cursor-pointer"
              : "text-DGrayBlue cursor-pointer"
          }
        >
          {todo.content}
        </p>
      </div>
      <IconCross handleClick={() => deleteTodo(todo.id)} />
    </div>
  );
};

export default ListItem;
