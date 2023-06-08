import { useContext } from "react";
import ClearBtn from "../common/ClearBtn";
import IconTheme from "../common/IconTheme";
import ItemCounter from "../common/ItemCounter";
import TodoFilter from "../common/TodoFilter";
import ListFlexContainer from "../list/ListFlexContainer";
import { TodoContext } from "../../context/todo.context";
import Loading from "../common/Loading";
import Form from "../form/Form";
import { THEME } from "../../interfaces/interface";
import { ThemeContext } from "../../context/theme.context";

const MainContainer = () => {
  const { filteredTodos, isLoading, handleFilter, filter } =
    useContext(TodoContext);
  const { theme } = useContext(ThemeContext);

  return (
    <div className="flex flex-col w-full items-center justify-center gap-4">
      <div className="flex w-full max-w-[400px] items-center justify-between">
        <h1
          className={`uppercase text-xLarge font-700 tracking-widest text-[#ffffff]`}
        >
          todo
        </h1>
        <IconTheme />
      </div>
      <Form />
      <div className="w-full">
        {isLoading ? <Loading /> : <ListFlexContainer todos={filteredTodos} />}
        <div
          className={`flex w-full gap-3 p-4 rounded justify-between ${
            theme === THEME.LIGHT ? "bg-LGray" : "bg-VDGrayishBlueThree"
          }`}
        >
          <ItemCounter count={filteredTodos.length} />
          <ClearBtn />
        </div>
      </div>
      <div
        className={`flex w-full gap-3 p-4 rounded justify-center ${
          theme === THEME.LIGHT ? "bg-LGray" : "bg-VDGrayishBlueThree"
        }`}
      >
        <TodoFilter current={filter} onChange={handleFilter} />
      </div>
    </div>
  );
};

export default MainContainer;
