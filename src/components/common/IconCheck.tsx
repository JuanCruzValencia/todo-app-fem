import { IMAGES } from "../../assets/Images";

type Props = {
  completed?: boolean;
};

const IconCheck: React.FC<Props> = ({ completed }) => {
  return (
    <div
      className={`flex items-center justify-center w-[25px] h-[25px] border border-lGrayBlue rounded-full ${
        completed && "bg-BBlue"
      } hover:border-CheckOne cursor-pointer`}
    >
      {completed && <img src={IMAGES.iconCheck} alt="icon-check" />}
    </div>
  );
};

export default IconCheck;
