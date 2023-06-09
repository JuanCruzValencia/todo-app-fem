import { useContext } from "react";
import ListFlexContainer from "../list/ListFlexContainer";
import { TodoContext } from "../../context/todo.context";
import Form from "../form/Form";
import { THEME } from "../../interfaces/interface";
import { ThemeContext } from "../../context/theme.context";
import { ClearBtn, IconTheme, ItemCounter, Loading, TodoFilter } from "../common";

const MainContainer = () => {
  const { filteredTodos, isLoading, handleFilter, filter } =
    useContext(TodoContext);
  const { theme } = useContext(ThemeContext);

  return (
    <div className="flex flex-col w-full items-center justify-center gap-4">
      <div className="flex w-full max-w-[400px] items-center justify-between">
        <h1
          className={`uppercase text-xLarge font-700 tracking-widest text-white`}
        >
          todo
        </h1>
        <IconTheme />
      </div>
      <Form />
      <div className="w-full flex flex-col items-center justify-center text-small">
        {isLoading ? <Loading /> : <ListFlexContainer todos={filteredTodos} />}
        <div
          className={`flex w-full gap-3 p-4 rounded justify-between text-small text-DDGrayBlue ${
            theme === THEME.LIGHT ? "bg-white" : "bg-VDGrayishBlueThree"
          }`}
        >
          <ItemCounter count={filteredTodos.length} />
          <ClearBtn />
        </div>
      </div>
      <div
        className={`flex w-full gap-3 p-4 rounded justify-center ${
          theme === THEME.LIGHT ? "bg-white" : "bg-VDGrayishBlueThree"
        }`}
      >
        <TodoFilter current={filter} onChange={handleFilter} />
      </div>
    </div>
  );
};

export default MainContainer;
