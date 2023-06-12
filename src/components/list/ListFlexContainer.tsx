import ListItem from "./ListItem";
import { ITodo } from "../../interfaces/interface";

type Props = {
  todos: ITodo[];
};

const ListFlexContainer: React.FC<Props> = ({ todos }) => {
  return (
    <>
      {todos.map((todo, index) => {
        return <ListItem todo={todo} key={index} index={index} />;
      })}
    </>
  );
};

export default ListFlexContainer;
