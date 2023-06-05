import useForm from "../../hooks/useForm";
import Input from "../common/Input";

const Form: React.FC = () => {
  const initialValue = {
    todo: "",
  };
  const { errors, handleChange, handleSubmmit } = useForm({ initialValue });

  return (
    <form onSubmit={handleSubmmit}>
      <Input
        type="string"
        name="todo"
        placeholder="Create new todo..."
        required={true}
        error={errors}
        className=""
        handleChange={handleChange}
      />
    </form>
  );
};

export default Form;
