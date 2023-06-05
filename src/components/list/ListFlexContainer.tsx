import { useContext } from "react";
import ListItem from "./ListItem";
import { TodoContext } from "../../context/todo.context";
import Loading from "../common/Loading";

const ListFlexContainer: React.FC = () => {
  const { todos, isLoading } = useContext(TodoContext);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      {todos.map((todo) => {
        return <ListItem todo={todo} key={todo.id} />;
      })}
    </>
  );
};

export default ListFlexContainer;
