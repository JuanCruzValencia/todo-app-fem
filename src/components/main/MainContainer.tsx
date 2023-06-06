import { useContext } from "react";
import ClearBtn from "../common/ClearBtn";
import IconTheme from "../common/IconTheme";
import ItemCounter from "../common/ItemCounter";
import TodoFilter from "../common/TodoFilter";
import ListFlexContainer from "../list/ListFlexContainer";
import { TodoContext } from "../../context/todo.context";
import Loading from "../common/Loading";
import Form from "../form/Form";

const MainContainer = () => {
  const { filteredTodos, isLoading, handleFilter, filter } =
    useContext(TodoContext);

  return (
    <>
      <div className="flex w-full max-w-[400px] items-center justify-between">
        <h1 className="uppercase">todo</h1>
        <IconTheme />
      </div>
      <div>
        <Form />
      </div>
      <div>
        {isLoading ? <Loading /> : <ListFlexContainer todos={filteredTodos} />}
      </div>
      <div className="flex">
        <ItemCounter count={filteredTodos.length} />
        <TodoFilter current={filter} onChange={handleFilter} />
        <ClearBtn />
      </div>
    </>
  );
};

export default MainContainer;
