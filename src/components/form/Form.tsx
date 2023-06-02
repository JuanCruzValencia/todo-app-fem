import Input from "../common/Input";

const Form: React.FC = () => {
  return (
    <form action="">
      <Input
        type="string"
        name="note"
        placeholder="new note"
        required={true}
        error="error"
        className=""
      />
    </form>
  );
};

export default Form;
