import { useContext } from "react";
import { ThemeContext } from "../../context/theme.context";
import { THEME } from "../../interfaces/interface";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <main
      className={`flex flex-col w-full min-h-[100vh] items-center py-10 px-5 ${
        theme === THEME.LIGHT
          ? "bg-mobile_light md:bg-desktop_light bg-no-repeat bg-top bg-[length:400px_200px] md:bg-[length:1400px_300px] bg-lGrayBlue"
          : "bg-mobile_dark md:bg-desktop_dark bg-no-repeat bg-top bg-[length:400px_200px] md:bg-[length:1400px_300px] bg-VDBlue"
      }`}
    >
      {children}
    </main>
  );
};

export default Layout;
