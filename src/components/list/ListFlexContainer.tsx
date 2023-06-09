import ListItem from "./ListItem";
import { ITodo } from "../../interfaces/interface";

type Props = {
  todos: ITodo[];
  isDragging: boolean;
  handleDragging: (dragging: boolean) => void;
};

const ListFlexContainer: React.FC<Props> = ({
  todos,
  isDragging,
  handleDragging,
}) => {
  return (
    <>
      {todos.map((todo) => {
        return (
          <ListItem todo={todo} key={todo.id} handleDragging={handleDragging} />
        );
      })}
    </>
  );
};

export default ListFlexContainer;
