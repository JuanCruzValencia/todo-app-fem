import { useContext } from "react";
import { ITodo, THEME } from "../../interfaces/interface";
import { TodoContext } from "../../context/todo.context";
import IconCheck from "../common/IconCheck";
import IconCross from "../common/IconCross";
import { ThemeContext } from "../../context/theme.context";

type Props = {
  todo: ITodo;
};

const ListItem: React.FC<Props> = ({ todo }) => {
  const { completeTodo, deleteTodo } = useContext(TodoContext);
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`flex w-full justify-between gap-3 p-4 rounded ${
        theme === THEME.LIGHT ? "bg-LGray" : "bg-VDGrayishBlueThree"
      }`}
    >
      <div className="flex gap-5">
        <IconCheck completed={todo.completed} />
        <p
          onClick={() => completeTodo(todo.id)}
          className={
            todo.completed ? "line-through cursor-pointer" : "cursor-pointer"
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
