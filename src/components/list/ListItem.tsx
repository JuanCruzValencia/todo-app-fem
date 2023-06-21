import { useContext } from "react";
import { ITodo, THEME } from "../../interfaces/interface";
import { TodoContext } from "../../context/todo.context";
import { ThemeContext } from "../../context/theme.context";
import IconCheck from "../common/IconCheck";
import IconCross from "../common/IconCross";

type Props = {
  todo: ITodo;
  index: number;
};

const ListItem: React.FC<Props> = ({ todo, index }) => {
  const {
    completeTodo,
    deleteTodo,
    dragTodoEnd,
    dragTodoStart,
    dropTodoHandler,
  } = useContext(TodoContext);
  const { theme } = useContext(ThemeContext);

  return (
    <div
      draggable
      onDragStart={(e) => dragTodoStart(e, index)}
      onDragEnter={(e) => dragTodoEnd(e, index)}
      onDragEnd={dropTodoHandler}
      className={`flex w-full justify-between items-center gap-3 p-4 rounded ${
        theme === THEME.LIGHT ? "bg-white" : "bg-VDGrayishBlueThree"
      }`}
    >
      <div className="flex gap-5">
        <IconCheck completed={todo.completed} />
        <p
          onClick={() => completeTodo(todo.id)}
          className={`p-1 text-DDGrayBlue cursor-pointer
            ${todo.completed && "line-through"}
          `}
        >
          {todo.content}
        </p>
      </div>
      <IconCross handleClick={() => deleteTodo(todo.id)} />
    </div>
  );
};

export default ListItem;
