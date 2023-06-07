import { useContext } from "react";
import useForm from "../../hooks/useForm";
import { THEME } from "../../interfaces/interface";
import IconCheck from "../common/IconCheck";
import Input from "../common/Input";
import { ThemeContext } from "../../context/theme.context";

const Form: React.FC = () => {
  const initialValue = {
    todo: "",
  };
  const { errors, handleChange, handleSubmmit } = useForm({ initialValue });
  const { theme } = useContext(ThemeContext);

  return (
    <form
      onSubmit={handleSubmmit}
      className={`flex w-full gap-3 p-4 rounded ${
        theme === THEME.LIGHT ? "bg-LGray" : "bg-VDGrayishBlueThree"
      }`}
    >
      <IconCheck completed={false} />
      <Input
        type="string"
        name="todo"
        placeholder="Create new todo..."
        required={true}
        error={errors}
        className={`outline-0	${
          theme === THEME.LIGHT ? "bg-LGray" : "bg-VDGrayishBlueThree"
        }`}
        handleChange={handleChange}
      />
    </form>
  );
};

export default Form;
