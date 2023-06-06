import ListItem from "./ListItem";
import { ITodo } from "../../interfaces/interface";

type Props = {
  todos: ITodo[];
};

const ListFlexContainer: React.FC<Props> = ({ todos }) => {
  return (
    <>
      {todos.map((todo) => {
        return <ListItem todo={todo} key={todo.id} />;
      })}
    </>
  );
};

export default ListFlexContainer;
