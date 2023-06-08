import { IMAGES } from "../../assets/Images";

type Props = {
  handleClick: () => void;
};

const IconCross: React.FC<Props> = ({ handleClick }) => {
  return (
    <div
      onClick={handleClick}
      className="flex w-[25px] h-[25px] items-center justify-center w-[30px] cursor-pointer "
    >
      <img src={IMAGES.iconCross} alt="icon-sun" />
    </div>
  );
};

export default IconCross;
