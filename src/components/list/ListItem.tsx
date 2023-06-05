import { useContext } from "react";
import { ITodo } from "../../interfaces/interface";
import { TodoContext } from "../../context/todo.context";

type Props = {
  todo: ITodo;
};

const ListItem: React.FC<Props> = ({ todo }) => {
  const { completeTodo } = useContext(TodoContext);

  return (
    <div className="flex gap-5">
      <div>ICON</div>
      <p onClick={() => completeTodo(todo.id)} className={todo.completed ? "text-LGray line-through" : ""}>{todo.content}</p>
    </div>
  );
};

export default ListItem;
