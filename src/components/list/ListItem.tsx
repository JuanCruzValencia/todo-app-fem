import { useContext } from "react";
import { ITodo } from "../../interfaces/interface";
import { TodoContext } from "../../context/todo.context";
import IconCheck from "../common/IconCheck";
import IconCross from "../common/IconCross";

type Props = {
  todo: ITodo;
};

const ListItem: React.FC<Props> = ({ todo }) => {
  const { completeTodo, deleteTodo } = useContext(TodoContext);

  return (
    <div className="flex gap-5 bg-[#ffffff]">
      <IconCheck completed={todo.completed} />
      <p
        onClick={() => completeTodo(todo.id)}
        className={
          todo.completed
            ? "text-LGray line-through cursor-pointer"
            : "cursor-pointer"
        }
      >
        {todo.content}
      </p>
      <IconCross handleClick={() => deleteTodo(todo.id)} />
    </div>
  );
};

export default ListItem;
