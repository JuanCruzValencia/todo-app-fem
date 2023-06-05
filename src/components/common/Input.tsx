import { ChangeEvent } from "react";
import { IFormField } from "../../interfaces/interface";

type Props = {
  type: string;
  name: string;
  placeholder: string;
  required: boolean;
  error?: IFormField;
  className: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<Props> = ({
  type,
  name,
  placeholder,
  required,
  error,
  className,
  handleChange,
}) => {
  return (
    <>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className={className}
        onChange={handleChange}
      />
      {error && <span>{error.todo}</span>}
    </>
  );
};

export default Input;
