import { ITodoList } from "../../interfaces/interface";

type Props = {
  item: ITodoList;
};

const ListItem: React.FC<Props> = ({ item }) => {
  return (
    <div>
      <div>ICON</div>
      <p>{item.content}</p>
    </div>
  );
};

export default ListItem;
