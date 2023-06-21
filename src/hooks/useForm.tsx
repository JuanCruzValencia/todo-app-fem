import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { IFormField } from "../interfaces/interface";
import { TodoContext } from "../context/todo.context";

type FormProps = {
  initialValue: IFormField;
};

const useForm = ({ initialValue }: FormProps) => {
  const [form, setForm] = useState<IFormField>({ ...initialValue });
  const [errors, setErrors] = useState<IFormField>({});
  const { addTodo } = useContext(TodoContext);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSubmmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newError: IFormField = {};

    if (form.todo?.trim() === "") {
      newError.todo = "New note cant be empty";
    }

    setErrors(newError);
    
    addTodo(form.todo);

    e.currentTarget.reset();
  };

  return {
    handleChange,
    handleSubmmit,

    errors,
  };
};

export default useForm;
