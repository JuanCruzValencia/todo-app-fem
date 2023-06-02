import { useEffect, useState } from "react";
import { ITodoList } from "../../interfaces/interface";
import { listRequest } from "../../api/request";

const ListFlexContainer: React.FC = () => {
  const [list, setList] = useState<ITodoList[]>([]);

  useEffect(() => {
    const fetchList = async () => {
      const resolve = await listRequest();
      setList(resolve);
    };
    fetchList();
  }, []);

  return (
    <>
      <div>{JSON.stringify(list)}</div>
    </>
  );
};

export default ListFlexContainer;
