import { useContext } from "react";
import { ITodo, THEME } from "../../interfaces/interface";
import { TodoContext } from "../../context/todo.context";
import { ThemeContext } from "../../context/theme.context";
import IconCheck from "../common/IconCheck";
import IconCross from "../common/IconCross";
import useDragEvent from "../../hooks/useDrag";

type Props = {
  todo: ITodo;
  index: number;
};

const ListItem: React.FC<Props> = ({ todo, index }) => {
  const { completeTodo, deleteTodo } = useContext(TodoContext);
  const { dragEnd, dragStart, dropItemHandler } = useDragEvent();
  const { theme } = useContext(ThemeContext);

  return (
    <div
      draggable
      onDragStart={(e) => dragStart(e, index)}
      onDragEnter={(e) => dragEnd(e, index)}
      onDragEnd={dropItemHandler}
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
