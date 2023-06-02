type Props = {
  className: string;
  text: string;
  handleClick?: () => void;
};

const Button: React.FC<Props> = ({ className, text, handleClick }) => {
  return (
    <button onClick={handleClick} className={className}>
      {text}
    </button>
  );
};

export default Button;
