import { ChangeEvent, FormEvent, useState } from "react";

interface FormField {
  content?: string;
}

type FormProps = {
  initialValue: FormField;
};

const useForm = ({ initialValue }: FormProps) => {
  const [form, setForm] = useState<FormField>({ ...initialValue });
  const [errors, setErrors] = useState<FormField>({});

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

    const newError: FormField = {};

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
