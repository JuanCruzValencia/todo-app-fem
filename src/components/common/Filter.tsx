import { FILTER } from "../../interfaces/interface";

type Props = {
  current: FILTER;
  onChange: (filter: FILTER) => void;
};

const TodoFilter: React.FC<Props> = ({ current, onChange }) => {
  const filters = [FILTER.ALL, FILTER.ACTIVE, FILTER.COMPLETED];

  return (
    <>
      {filters.map((filter) => {
        <div
          key={filter}
          onClick={() => onChange(filter)}
          className={current === filter ? "" : ""}
        >
          {filter}
        </div>;
      })}
    </>
  );
};

export default TodoFilter;
