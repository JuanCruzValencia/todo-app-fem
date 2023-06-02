import { ChangeEvent, FormEvent, useState } from "react";
import { IFormField } from "../interfaces/interface";

type FormProps = {
  initialValue: IFormField;
};

const useForm = ({ initialValue }: FormProps) => {
  const [form, setForm] = useState<IFormField>({ ...initialValue });
  const [errors, setErrors] = useState<IFormField>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSubmmit = (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault();

    const newError: IFormField = {};

    if (form.content?.trim() === "") {
      newError.content = "New note cant be empty";
    }

    setErrors(newError);

    console.log(form);
  };

  return {
    handleChange,
    handleSubmmit,
    errors,
  };
};

export default useForm;
