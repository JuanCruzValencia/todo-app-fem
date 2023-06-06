import { useContext } from "react";
import { TodoContext } from "../../context/todo.context";
import Button from "./Button";

const ClearBtn = () => {
  const { deleteCompleted } = useContext(TodoContext);

  return (
    <Button
      className=""
      text="clear completed"
      handleClick={() => deleteCompleted}
    />
  );
};

export default ClearBtn;
