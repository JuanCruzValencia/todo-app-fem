import { useContext } from "react";
import { TodoContext } from "../../context/todo.context";
import Button from "./Button";

const ClearBtn = () => {
  const { deleteCompleted } = useContext(TodoContext);

  return (
    <Button
      className="capitalize"
      text="clear completed"
      handleClick={() => deleteCompleted}
    />
  );
};

export default ClearBtn;
