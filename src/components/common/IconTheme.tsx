import { useContext } from "react";
import { ThemeContext } from "../../context/theme.context";
import { IMAGES } from "../../assets/Images";
import { THEME } from "../../interfaces/interface";

const IconTheme = () => {
  const { theme, handleThemeColor } = useContext(ThemeContext);

  return (
    <div
      onClick={handleThemeColor}
      className="flex items-center justify-center w-[30px] cursor-pointer"
    >
      {theme === THEME.LIGHT ? (
        <img src={IMAGES.iconSun} alt="icon-sun" />
      ) : (
        <img src={IMAGES.iconMoon} alt="icon-moon" />
      )}
    </div>
  );
};

export default IconTheme;
