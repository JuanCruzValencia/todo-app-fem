type Props = {
  type: string;
  name: string;
  placeholder: string;
  required: boolean;
  error: string;
  className: string;
};

const Input: React.FC<Props> = ({
  type,
  name,
  placeholder,
  required,
  error,
  className,
}) => {
  return (
    <>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className={className}
      />
      {error && <span>error</span>}
    </>
  );
};

export default Input;
