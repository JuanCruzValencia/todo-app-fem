import { IMAGES } from "../../assets/Images";

type Props = {
  completed?: boolean;
};

const IconCheck: React.FC<Props> = ({ completed }) => {
  if (completed) {
    return (
      <div className="flex items-center justify-center w-[25px] border-2 border-LGray rounded-full bg-gradient-to-b from-CheckOne to-CheckTwo">
        <img src={IMAGES.iconCheck} alt="icon-check" />
      </div>
    );
  }

  return (
    <div className="w-[25px] h-[25px border-2 border-LGray rounded-full hover:border-CheckOne cursor-pointer"></div>
  );
};

export default IconCheck;
