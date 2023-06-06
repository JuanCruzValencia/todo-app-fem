type Props = {
  count: number;
};

const ItemCounter: React.FC<Props> = ({ count }) => {
  return (
    <div>
      <span>{count} items left</span>
    </div>
  );
};

export default ItemCounter;
